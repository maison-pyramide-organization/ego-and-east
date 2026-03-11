import { useEffect, useRef, useState } from "react";
interface Iprops {
  src: string;
}

export default function HoverVideo(props: Iprops) {
  const { src } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    // video
    //   .play()
    //   .then(() => video.pause())
    //   .catch(() => {});
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

  const play = () => videoRef.current?.play();
  const pause = () => {
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0; // optional reset
  };

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      pause();
    }
  };

  return (
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
  );
}
