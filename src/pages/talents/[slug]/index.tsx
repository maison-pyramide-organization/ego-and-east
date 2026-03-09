import { useEffect, useState } from "react";
import s from "./_s.module.scss";

import { getTalent } from "../../../services/api";
import { useParams } from "react-router-dom";
import About from "./c/about";
import Brands from "./c/brands";
import Films from "./c/films";
import Talks from "./c/talks";
import Footer from "@/components/footer";
import Bof from "./c/bof";
import Network from "./c/network";
import Press from "./c/press";
import TS01 from "@/components/ts01";

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
    brands,
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
      <About talent={talent} />
      <div className={s.npw}>
        <Network network={network} />
        <Press press={talent.press} />
      </div>
      {brands?.length > 0 && <Brands brands={brands} />}
      <Films films={films} />
      {sections.map((section) => {
        switch (section.sys.contentType.sys.id) {
          case "ts01":
            return <TS01 section={section.fields} />;
          default:
            return null;
        }
      })}
      <Talks talks={talks} talksBanner={talksBanner} talksIntro={talksIntro} />
      <Bof bof={bof} />
      <Footer />
    </div>
  );
};

export default Talent;
