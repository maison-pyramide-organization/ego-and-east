import { useSwiper } from "swiper/react";

const Btn = () => {
  const swiper = useSwiper();
  const handleClick = () => {
    console.log("ddl");
    console.log(swiper.activeIndex);
  };
  return <button onClick={handleClick}>dsdd</button>;
};
export default Btn;
