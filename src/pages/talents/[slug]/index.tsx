/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import s from "./_s.module.scss";
import "swiper/css";
import { getTalent } from "../../../services/api";
import { Link, useParams } from "react-router-dom";
import About from "./c/about";
// import Brands from "./c/brands";
import Films from "./c/films";
import Talks from "./c/talks";
import Bof from "./c/bof";
import Network from "./c/network";
// import Press from "./c/press";
import TS01 from "@/components/ts01";
import { ReactComponent as Ilogo } from "@a/b-logo.svg";
import Footer from "./c/footer";
import TS02 from "@/components/ts02";

const Talent = () => {
  const [talent, setTalent] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;
    getTalent(slug).then((talent) => {
      setTalent(talent);
    });
  }, []);

  if (!talent) return null;
  const {
    // brands,
    talks,
    talksBanner,
    talksIntro,
    bof,
    films,
    network,
    sections,
  } = talent;

  return (
    <div className={s.p}>
      <div className={s.h}>
        <Link to="/">
          <Ilogo />
        </Link>
      </div>
      <About talent={talent} />
      <Network network={network} />
      {/* <Press press={talent.press} /> */}
      {/* {brands?.length > 0 && <Brands brands={brands} />} */}
      {sections.map((section, i) => {
        switch (section.sys.contentType.sys.id) {
          case "ts02":
            return <TS02 section={section.fields} key={i} />;
          case "ts01":
            return <TS01 section={section.fields} key={i} />;
          default:
            return null;
        }
      })}
      <Films films={films} />
      <Talks talks={talks} talksBanner={talksBanner} talksIntro={talksIntro} />
      {/* <Bof bof={bof} /> */}
      <Footer />
    </div>
  );
};

export default Talent;
