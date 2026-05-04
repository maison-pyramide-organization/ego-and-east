import s from "../../_s.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReactComponent as Iarrow } from "@ic/arr.svg";

interface Iprops {
  talks: any[];
  talksBanner: any;
  talksIntro: string;
}

export default function Talks(props: Iprops) {
  const { talks, talksBanner, talksIntro } = props;

  return (
    <section className={s["s-talks"]}>
      <h2>
        TALKS
        <span>& PANELS</span>
      </h2>
      <figure>
        <img src={talksBanner.fields.file.url} alt="" />
      </figure>
      <p>{talksIntro}</p>

      <nav>
        <Iarrow id="talks-prev" />
        <Iarrow id="talks-next" />
      </nav>
      <Swiper
        spaceBetween="16rem"
        slidesPerView={2}
        breakpoints={{
          770: {
            spaceBetween: "20rem",
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: "#talks-prev",
          nextEl: "#talks-next",
        }}
      >
        {talks?.map((talk) => (
          <SwiperSlide key={talk.sys.id}>
            <figure>
              <img src={talk.fields.file.url} alt="" />
            </figure>
            <h4>{talk.fields.title}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
