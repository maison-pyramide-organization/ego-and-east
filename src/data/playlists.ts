import image1 from "../assets/Images/playlist/1.png";
import image2 from "../assets/Images/playlist/2.png";
import image3 from "../assets/Images/playlist/3.png";
import image4 from "../assets/Images/playlist/4.png";
import { Iplaylist } from "../types/playlists";

const playslists: Iplaylist[] = [
    {
        id: 1,
        image: image1,
        link: "https://open.spotify.com/playlist/3UlQmnkWVEpk6uLcc9rKfZ?si=7cbe7cda0ba0418c",
        playBtn: "black",
    },
    {
        id: 2,
        image: image2,
        link: "https://open.spotify.com/playlist/7ne6ZlH3snvvqgJy4j86Sb?si=81343e03eef5405e",
        playBtn: "black",
    },
    {
        id: 3,
        image: image3,
        link: "https://open.spotify.com/playlist/1XgTWVBpRMheq6kPvJWALF?si=5f01064944a649c3",
        playBtn: "black",
    },
    {
        id: 4,
        image: image4,
        link: "https://open.spotify.com/playlist/1TWTb9yTdbKJwQRTL5bmKs?si=a5713f3a182d48a2",
        playBtn: "white",
    },
];

// export default [image1, image2, image3, image4];
export default playslists;
