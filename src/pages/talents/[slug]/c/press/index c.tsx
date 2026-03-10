import { useRef } from "react";
import s from "../../_s.module.scss";
import { ReactComponent as Iarrow } from "@ic/arr.svg";

interface Iprops {
  press: any[];
}

export default function Press(props: Iprops) {
  const { press } = props;

  const listR = useRef(null) as any;
  const scrollVR = useRef(0);

  const onBtnClick = (d) => {
    const list = listR.current;
    const liW = list.querySelector("li").offsetWidth;
    const itemsCount = list.querySelectorAll("li").length;

    const maxScroll = -(itemsCount - 1) * liW;

    let next = d === "prev" ? scrollVR.current + liW : scrollVR.current - liW;

    if (next > 0) next = 0;
    if (next < maxScroll) next = maxScroll;

    list.style.transform = `translateX(${next}px)`;
    scrollVR.current = next;
  };

  return (
    <section className={s["s-press"]}>
      <h2>
        IN THE <span>PRESS</span>
      </h2>
      <Iarrow onClick={() => onBtnClick("prev")} />
      <Iarrow onClick={() => onBtnClick("next")} />
      <ul className="h-s" ref={listR}>
        {press.map((item, i) => (
          <li key={i}>
            <figure>
              <img src={item.fields.file.url} alt="" />
            </figure>
            <figcaption>{item.fields.title}</figcaption>
          </li>
        ))}
      </ul>
    </section>
  );
}
