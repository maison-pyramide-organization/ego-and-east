import styles from "./styles.module.scss";
import playslists from "../../data/playlists";
import Playlist from "./Playlist";
import { Fragment } from "react";

const Music = () => {
    return (
        <div className={styles.music}>
            <h1 className={styles.title}>hit shuffle and enjoy</h1>
            <ul className={styles.musicList}>
                {playslists.map((playlist) => (
                    <Fragment key={playlist.id}>
                        <Playlist playlist={playlist} />
                    </Fragment>
                ))}
            </ul>
        </div>
    );
};
export default Music;
