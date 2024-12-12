import s from "./_s.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getTalentProfile from "../../services/api/getTalentProfile";
import { ReactComponent as LocationIcon } from "@a/Icons/location.svg";
import { ReactComponent as ArrowIcon } from "@a/Icons/arrow.svg";
import Header from "../../components/Header";

const Profile = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [talent, setTalent] = useState<any>(null);

  useEffect(() => {
    getTalentProfile(slug).then((talent) => {
      setTalent(talent);
    });
  }, [slug]);

  if (!talent) return;
  const { location, gallery, name, ig, tiktok } = talent;
  const hasGal = gallery.length > 1;

  const onC = () => {
    navigate("/talents");
  };
  return (
    <>
      <Header />
      <div className={hasGal ? `${s.p} ${s.hasGal}` : s.p}>
        <div className={s.talent}>
          {/* INFO */}
          <div className={s.l}>
            <button type="button" className={s["b-btn"]} onClick={onC}>
              <ArrowIcon />
            </button>
            <div className={s.data}>
              <div className={s.location}>
                <LocationIcon />
                <span>{location || "uae"}</span>
              </div>
              <h1 className={s.name}>{name}</h1>
              <p className={s.bio}>{talent.bio}</p>
              <div className={s.socials}>
                {talent.ig && (
                  <a target="_blank" href={ig}>
                    INSTAGRAM
                  </a>
                )}
                {talent.tiktok && (
                  <a target="_blank" href={tiktok}>
                    TIKTOK
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* GALLERY */}
          <div className={`${s.r} hide-scrollbar`}>
            {gallery?.map((img, i) => (
              <div className={s.img_} key={i}>
                <img src={img.imageUrl} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
