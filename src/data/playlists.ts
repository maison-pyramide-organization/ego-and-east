import image1 from "../assets/Images/playlist1.png";
import image2 from "../assets/Images/playlist2.png";
import image3 from "../assets/Images/playlist3.png";
import image4 from "../assets/Images/playlist4.png";
import { Iplaylist } from "../types/playlists";

const playslists: Iplaylist[] = [
    {
        id: 1,
        image: image1,
        link: "https://www.fb.com",
        playBtn:'black',
    },
    {
        id: 2,
        image: image2,
        link: "https://www.fb.com",
        playBtn:'black',
    },
    {
        id: 3,
        image: image3,
        link: "https://www.fb.com",
        playBtn:'black',
    },
    {
        id: 4,
        image: image4,
        link: "https://www.fb.com",
        playBtn:'white',
    },
];

// export default [image1, image2, image3, image4];
export default playslists;
