import { Iplaylist } from "../../../types/playlists";
import styles from "../styles.module.scss";
import { ReactComponent as SpotifyIcon } from "../../../assets/Icons/spotify.svg";
import { ReactComponent as PlayIcon } from "../../../assets/Icons/play.svg";
import classNames from "classnames";

interface Iprops {
  playlist: Iplaylist;
}

const Playlist = (props: Iprops) => {
  const { playlist } = props;
  console.log("p", playlist.image);

  const playBtnClass =
    playlist.button_color == "black"
      ? classNames(styles.playBtn, styles.blackBtn)
      : classNames(styles.playBtn, styles.whiteBtn);

  return (
    <div className={styles.playlist}>
      <img className={styles.playlistImage} src={playlist.image?.asset.url} alt="" />
      <SpotifyIcon className={styles.spotifyIcon} />
      <a
        target="_blank"
        href={playlist.link}
        className={playBtnClass}
        title="playlist"
      >
        <PlayIcon className={styles.playIcon} />
      </a>
    </div>
  );
};

export default Playlist;
