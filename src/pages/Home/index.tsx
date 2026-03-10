import s from "./_s.module.scss";
import Footer from "@/components/footer";
import Services from "./c/services";
import Campaigns from "./c/campaigns";

export default function Home() {
  return (
    <>
      <div className={s.p}>
        <Campaigns />
        <Services />
      </div>
      <Footer />
    </>
  );
}
