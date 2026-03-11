import s from "../../_s.module.scss";
import { ReactComponent as Iarrow } from "@ic/arr.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface Iprops {
  press: any[];
}

export default function Press(props: Iprops) {
  const { press } = props;

  return (
    <section className={s["s-press"]}>
      <div className={s.h}>
        <h2>
          IN THE <span>PRESS</span>
        </h2>
        <nav>
          <Iarrow id="press-prev" />
          <Iarrow id="press-next" />
        </nav>
      </div>
      <Swiper
        spaceBetween="16rem"
        slidesPerView={2.5}
        breakpoints={{
          770: {
            spaceBetween: "20rem",
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: "#press-prev",
          nextEl: "#press-next",
        }}
      >

        {press.map((item, i) => (
          <SwiperSlide key={i}>
            <figure>
              <img src={item.fields.file.url} alt="" />
            </figure>
            <figcaption>{item.fields.title}</figcaption>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
