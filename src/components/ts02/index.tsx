import s from "./_s.module.scss";
import { ReactComponent as Iarrow } from "@ic/arr.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface Iprops {
  section: any;
}

export default function TS02(props: Iprops) {
  const { section } = props;

  const { id, title, gallery, twoLines, rightAligned } = section;
  const title_split = title.split("-");

  return (
    <section className={s.s}>
      <div className={s.h}>
        <h2 className={rightAligned ? "ra" : ""}>
          {title_split[0]}{" "}
          <span className={twoLines ? "tl" : ""}>{title_split[1]}</span>
        </h2>
        <nav>
          <Iarrow id={`${id}-prev`} />
          <Iarrow id={`${id}-next`} />
        </nav>
      </div>
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
          prevEl: `#${id}-prev`,
          nextEl: `#${id}-next`,
        }}
      >
        {gallery.map((item, i) => (
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
