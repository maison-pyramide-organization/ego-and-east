import s from "./_s.module.scss";
import Footer from "@/components/footer";
import Services from "./c/services";
import Campaigns from "./c/campaigns";
import Hero from "./c/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <div className={s.p}>
        <Header />
        <Hero />
        <Campaigns />
        <Services />
      </div>
      <Footer />
    </>
  );
}
