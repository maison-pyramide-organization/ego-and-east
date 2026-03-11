import s from "../../_s.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReactComponent as Iarrow } from "@ic/arr.svg";

interface Iprops {
  brands: any[];
}

export default function Brands(props: Iprops) {
  const { brands } = props;

  return (
    <section className={s["s-brands"]}>
      <div className={s.h}>
        <nav>
          <Iarrow id="brands-prev" />
          <Iarrow id="brands-next" />
        </nav>
        <h2>
          BRANDS
          <span>PARTNERSHIPS</span>
        </h2>
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
          prevEl: "#brands-prev",
          nextEl: "#brands-next",
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.sys.id}>
            <figure>
              <img src={brand.fields.file.url} alt="" />
              <figcaption>{brand.fields.title}</figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
