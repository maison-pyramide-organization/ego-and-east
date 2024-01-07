import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import posts from "../../data/posts.json";
import fetchPosts from "./utils/fetchPosts";
import { post } from "../../types/post";
import Post from "./post";

const Gallery = () => {
    const ig_url = "https://www.instagram.com/egoandeast/";
    const userId = import.meta.env.VITE_USER_ID;
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const [igPosts, setIgPosts] = useState<post[] | null>(null);

    useEffect(() => {
        fetchPosts(userId, accessToken)
            .then((posts) => {
                setIgPosts(posts);
            })
            .catch((err) => {
                console.log(err);
                setIgPosts(posts);
            });
    }, []);

    return (
        <>
            {igPosts && (
                <section className={classNames("section", styles.gallerySection)}>
                    <div
                        className={classNames(styles.galleryContainer, "hide-scrollbar")}
                        id="gallery-container"
                    >
                        <div id="gallery" className={styles.gallery}>
                            {/* IMAGES  */}

                            {igPosts.map((post, index) => (
                                <Post post={post} key={index} />
                            ))}
                        </div>
                    </div>
                    <a href={ig_url} target="_default" className={styles.igLink}>
                        <span className={styles.igUserName}>@egoandeast</span>
                        <button type="button" className={styles.followBtn}>
                            follow us
                        </button>
                    </a>
                </section>
            )}
        </>
    );
};

export default Gallery;
