import styles from "./styles.module.scss";
import Playlist from "./Playlist";
import { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import getPlaylists from "../../services/api/getPlaylists";
import { Iplaylist } from "../../types/playlists";

const Music = () => {
  const [playlists, setPlaylists] = useState<Iplaylist[] | null>(null);

  useEffect(() => {
    getPlaylists().then((pls) => {
      setPlaylists(pls);
    });
  }, []);

  return (
    <section className={classNames(styles.music, "section")}>
      <h1 className={classNames("title")}>hit shuffle and enjoy</h1>
      <ul className={styles.musicList}>
        {playlists?.map((playlist) => (
          <Fragment key={playlist.id}>
            <Playlist playlist={playlist} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
};
export default Music;
