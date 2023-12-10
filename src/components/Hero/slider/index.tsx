import { Swiper, SwiperSlide } from "swiper/react";
import slideshowImages from "../../../data/slideshow";
import "swiper/css";
import styles from "./styles.module.scss";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

const Slider = () => {
  const imagesCount = slideshowImages.length;
  const slideTextRef = useRef(null);
  const handleSlideChange = (e) => {
    const slideTextEl = slideTextRef.current! as HTMLHeadingElement;
    slideTextEl.innerText = e.realIndex;
  };

  return (
    <div className={styles.slider_container}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={64}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1000 }}
        onSlideChange={handleSlideChange}
      >
        {slideshowImages.map((image, i) => (
          <SwiperSlide className={styles.slide} key={i}>
            <img src={image} className={styles.slide_img} />
          </SwiperSlide>
        ))}
        {/* <Btn /> */}
      </Swiper>

      <h1 className={styles.slide_text} ref={slideTextRef}>0</h1>
    </div>
  );
};

export default Slider;
