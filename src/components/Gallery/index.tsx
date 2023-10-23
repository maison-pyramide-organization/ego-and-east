import { useEffect, useState } from "react";
// import images from "../../data/gallery";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as IgIcon } from "../../assets/Icons/instagram.svg";
import animate from "./animation";

export interface InstaItem {
    permalink: string;
    mediaUrl: string;
    mediaType: string;
}
const Gallery = () => {
    const ig_url = "https://www.instagram.com/egoandeast/";
    const accessToken =
        "IGQWRQU2x1azV5OXlvMXBVVFluU3Y0SGlqTlZAUUDdXZAXBPTGJWcFZAfSV9tMndMMDFMaERNSXVtWDVxTmtaLVBIbkp0bnNHOEkxOGM2NVh3aVA1SWVIYW5wVTVvcDNYRU1WTnJsYkt2dXFPaVowTUMzWlpXMTE5ZAUkZD";
    const userId = "23949713848007342";
    const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;

    const [instaItems, setInstaItems] = useState<InstaItem[]>([]);

    useEffect(() => {
        const fetchMedia = async (id: string) => {
            const mediaUrl = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,media_type,permalink`;
            const res = await fetch(mediaUrl);
            const json = await res.json();

            const instaItem = {
                permalink: json.permalink,
                mediaUrl: json.media_url,
                mediaType: json.media_type,
            };
            return instaItem;
        };
        const doFetch = async () => {
            if (!userId || !accessToken) {
                console.log("userId or accessToken is undefined: ", { userId, accessToken });
                return;
            }

            const res = await fetch(instaUrl);
            const json = (await res.json()).data;
            console.log(json);

            const fetchedItems: InstaItem[] = [];

            for (let i = 0; i < json.length && i < 25; i++) {
                const item = json[i];
                const itemId = item.id;

                const instaItem = await fetchMedia(itemId);
                fetchedItems.push(instaItem);
            }
            setInstaItems(fetchedItems);
        };
        doFetch();
    }, [userId, accessToken, instaUrl]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animate();
    }, [instaItems]);
    // console.log("instaItems",instaItems)
    return (
        <section className="section">
            <div className={styles.galleryContainer}>
                <div id="gallery" className={styles.gallery}>
                    {/* IMAGES  */}
                    {instaItems.map((image) => {
                        if (image.mediaType !== "VIDEO") {
                            return (
                                <a
                                    target="_blank"
                                    href={image.permalink}
                                    className={styles.imageWraper}
                                    key={image.permalink}
                                    style={{ backgroundImage: `url(${image.mediaUrl})` }}
                                >
                                    <IgIcon className={styles.igIcon} />
                                </a>
                            );
                        }
                    })}
                </div>
            </div>
            <a href={ig_url} target="_default" className={styles.igLink}>
                <span className={styles.igUserName}>@egoandeast</span>
                <button type="button" className={styles.followBtn}>
                    follow us
                </button>
            </a>
        </section>
    );
};
export default Gallery;
