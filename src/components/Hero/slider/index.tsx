import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

interface Iprops {
    slides: any;
}
const Slider = (props: Iprops) => {
    const { slides } = props;
    if (!slides) return null;
    return (
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
            {slides.map((slide: any, i: number) => (
                <SwiperSlide className={styles.slide} key={i}>
                    <div className={styles.slide_img_wrapper}>
                        <img
                            src={slide.url + "?w=1000"}
                            className={styles.slide_img}
                            alt={slide.title}
                        />
                    </div>
                    <span className={styles.slide_title}>{slide.title}</span>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
