import s from "./_s.module.scss";
import { useParams } from "react-router-dom";
import p1 from "@a/images/talent.jpg";
import p2 from "@a/images/talent.png";
import { useEffect, useState } from "react";
import getTalentProfile from "../../services/api/getTalentProfile";
import { ReactComponent as LocationIcon } from "@a/Icons/location.svg";

const Profile = () => {
    const { slug } = useParams();

    const [talent, setTalent] = useState<any>(null);

    useEffect(() => {
        getTalentProfile(slug).then((talent) => {
            setTalent(talent);
            console.log(talent);
        });
    }, [slug]);

    if (!talent) return;
    return (
        <div className={s.p}>
            {/* INFO */}
            <div className={s.l}>
                <div className={s.data}>
                    <div className={s.location}>
                        <LocationIcon />
                        <span>{talent.location || "uae"}</span>
                    </div>
                    <h1 className={s.name}>{talent.name}</h1>
                    <p className={s.bio}>{talent.bio}</p>
                    <div className={s.socials}>
                        {talent.ig && (
                            <a target="_blank" href={talent.ig}>
                                INSTAGRAM
                            </a>
                        )}
                        {talent.tiktok && (
                            <a target="_blank" href={talent.tiktok}>
                                TIKTOK
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* GALLERY */}
            <div className={`${s.r} hide-scrollbar`}>
                {talent.gallery?.map((img, i) => (
                    <div className={s.img_} key={i}>
                        <img src={img.imageUrl} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
