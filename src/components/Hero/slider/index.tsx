import { Swiper, SwiperSlide } from "swiper/react";
import sliderImages from "../../../data/slider";
import "swiper/css";
import styles from "./styles.module.scss";
import { Autoplay } from "swiper/modules";

const Slider = () => {
    return (
        <div className={styles.slider_container}>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 8000 }}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 64,
                    },
                }}
            >
                {sliderImages.map((slide, i) => (
                    <SwiperSlide className={styles.slide} key={i}>
                        <div className={styles.slide_img_wrapper}>
                            <img src={slide.img} className={styles.slide_img} alt={slide.title} />
                        </div>
                        <span className={styles.slide_title}>{slide.title}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
