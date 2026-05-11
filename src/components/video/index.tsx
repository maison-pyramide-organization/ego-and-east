import s from "./_s.module.scss";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Iplay } from "@a/icons/play.svg";
import { ReactComponent as Ipause } from "@a/icons/pause.svg";
import { getAssetUrl } from "@/services/api";

interface Iprops {
  src: string;
  coverId: string;
}

export default function HoverVideo(props: Iprops) {
  const { src, coverId } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canHover, setCanHover] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  useEffect(() => {
    if (coverId) {
      getAssetUrl(coverId).then((url) => {
        console.log("cover url", url);
        setCoverUrl(url);
      });
    }
    const video = videoRef.current;
    if (!video) return;

    video.load();
    // Detect if device supports hover
    const mediaQuery = window.matchMedia("(hover: hover)");

    setCanHover(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setCanHover(e.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  const play = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  };

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;

    video.paused ? play() : pause();
  };

  return (
    <figure className={s.fig}>
      {coverUrl && <img src={coverUrl} alt="EGO & EAST" className={s.cover} />}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        onMouseEnter={canHover ? play : undefined}
        onMouseLeave={canHover ? pause : undefined}
        onClick={!canHover ? toggle : undefined}
        style={{ cursor: canHover ? "default" : "pointer" }}
      />
      {<>{isPlaying ? <Ipause /> : <Iplay />}</>}
    </figure>
  );
}
