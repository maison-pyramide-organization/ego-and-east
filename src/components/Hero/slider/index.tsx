import s from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { ReactComponent as DownChevI } from "../../../assets/Icons/down chevron.svg";

interface Iprops {
  slides: any;
}
const Slider = (props: Iprops) => {
  const { slides } = props;
  if (!slides) return null;
  return (
    <div className={s.swiper_}>
      <nav className={s.slider_nav}>
        <button id="slider-prv" type="button">
          <DownChevI />
        </button>
        <button id="slider-next" type="button">
          <DownChevI />
        </button>
      </nav>

      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 8000 }}
        slidesPerView={1}
        navigation={{ nextEl: "#slider-next", prevEl: "#slider-prev" }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 64,
          },
        }}
      >
        {slides.map((slide: any, i: number) => (
          <SwiperSlide className={s.slide} key={i}>
            <div className={s.slide_img_wrapper}>
              <img
                src={slide.url + "?w=1000"}
                className={s.slide_img}
                alt={slide.title}
              />
            </div>
            <span className={s.slide_title}>{slide.title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
