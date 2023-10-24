import styles from "./styles.module.scss";
import playslists from "../../data/playlists";
import Playlist from "./Playlist";
import { Fragment } from "react";
import classNames from "classnames";

const Music = () => {
    return (
        <section className={classNames("section")}>
            <h1 className={classNames("title")}>hit shuffle and enjoy</h1>
            <ul className={styles.musicList}>
                {playslists.map((playlist) => (
                    <Fragment key={playlist.id}>
                        <Playlist playlist={playlist} />
                    </Fragment>
                ))}
            </ul>
        </section>
    );
};
export default Music;
