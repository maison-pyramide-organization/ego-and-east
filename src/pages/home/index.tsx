import s from "./_s.module.scss";
import Services from "./c/services";
import Campaigns from "./c/campaigns";
import Hero from "./c/hero";

export default function Home() {
  return (
    <div className={s.p}>
      <Hero />
      <Campaigns />
      <Services />
    </div>
  );
}
