import s from "./_s.module.scss";
import { useParams } from "react-router-dom";
import p1 from "@a/images/talent.jpg";
import p2 from "@a/images/talent.png";

const Profile = () => {
  const { handle } = useParams();

  const talent = {
    name: "karen wazen",
    gallery: [p1, p2],
    location: "UAE",
    bio: "Influential Middle Eastern entrepreneur & creator. Founder of Karen Wazen Collection, Co-Founder of KE Partners, UNHCR Goodwill Ambassador, and Fashion Trust Arabia executive board member.",
    ig: "",
    tiktok: "",
  };

  return (
    <div className={s.p}>

      {/* INFO */}
      <div className={s.l}>
        <div className={s.data}>
          <h1 className={s.name}>{talent.name}</h1>
          <p className={s.bio}>{talent.bio}</p>
          <div className={s.socials}>
            <a href="#">INSTAGRAM</a>
            <a href="#">TIKTOK</a>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className={s.r}>
        {talent.gallery.map((img) => (
          <div className={s.img_}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Profile;
