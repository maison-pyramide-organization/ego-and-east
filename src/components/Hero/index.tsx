import s from "./styles.module.scss";
import Slider from "./slider";
import { useEffect, useState } from "react";
import getSliderImages from "../../services/api/getSliderImages";

const Hero = () => {
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    getSliderImages().then((images) => {
      setSlides(images);
    });
  }, []);

  return (
    <div className={s.hero}>
      <div className={s.slider_container}>
        <Slider slides={slides} />
      </div>
      <h1 className={s.info}>
        We connect top luxury, beauty, and fashion brands with the most
        compelling talent in the Middle East. We specialize in talent
        management, booking, fashion week services, brand strategy, and
        influencer marketing.
      </h1>
    </div>
  );
};
export default Hero;
