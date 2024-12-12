// import { useEffect } from "react";
import s from "./_s.module.scss";
import talent from "@a/Images/talent.png";

const Talents = () => {
  // useEffect(() => {
  //   const parent = document.getElementById("parent");

  //   function preventOverscroll(event) {
  //     const isScrollable = parent.scrollHeight > parent.clientHeight;
  //     const atTop = parent.scrollTop === 0;
  //     const atBottom =
  //       parent.scrollTop + parent.clientHeight >= parent.scrollHeight;

  //     if (
  //       (event.deltaY < 0 && atTop) || // Scrolling up at the top
  //       (event.deltaY > 0 && atBottom) // Scrolling down at the bottom
  //     ) {
  //       event.preventDefault(); // Prevent overscroll
  //     }
  //   }

  //   // Listen for wheel events
  //   parent.addEventListener("wheel", preventOverscroll, { passive: false });

  //   // Optional: Prevent touchmove for mobile devices
  //   parent.addEventListener(
  //     "touchmove",
  //     (event) => {
  //       event.preventDefault();
  //     },
  //     { passive: false }
  //   );

  //   // Optional: Prevent arrow key scrolling
  //   window.addEventListener("keydown", (event) => {
  //     const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"];
  //     if (keys.includes(event.key)) {
  //       event.preventDefault();
  //     }
  //   });
  // }, []);

  return (
    <>
      <div id="p" className={s["p"]}>
        <div className={s.l}>
          <ul>
            <li>all</li>
            <li>actors</li>
            <li>creatives</li>
          </ul>

          <figure>
            <img src={talent} alt="" />
          </figure>
        </div>

        <div className={s.r}>
          <ul>
            <li>mosa</li>
            <li>wael</li>
            <li>mosa</li>
            <li>donia</li>
            <li>mosa</li>
            <li>laila</li>
            <li>amina</li>
            <li>farah</li>
            <li>biba</li>
            <li>mosa</li>
            <li>donia</li>
            <li>mosa</li>
            <li>laila</li>
            <li>amina</li>
            <li>farah</li>
            <li>biba</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Talents;
