// import { useEffect } from "react";
import s from "./_s.module.scss";
import talent from "@a/Images/talent.png";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import getTalents from "../../services/api/getTalents";
import preloadTalentImages from "./utils/preloadImages";
import cloneItems from "./utils/cloneItems";
import Header from "../../components/Header";
import filterTalents from "./utils/filterTalents";

const categories = ["all", "actors", "creatives", "musicians"];
const Talents = () => {
  const [talents, setTalents] = useState(null) as any;
  const [category, setCategory] = useState("all");
  // const { search } = useLocation();
  // const searchParams = new URLSearchParams(search);
  // const category = searchParams.get("category")
  // const [ft, setFT] = useState(null) as any;

  const fTalents = filterTalents(talents, category);

  const listRef = useRef(null) as any;

  // FETCH TALENTS
  useEffect(() => {
    getTalents().then((talents) => {
      setTalents(talents);
    });
  }, []);

  // SCROLLING
  useEffect(() => {
    if (!talents) return;
    const $page = document.getElementById("p") as any;
    // const $list = document.getElementById("talents") as any;
    const $list = listRef.current;
    const $talentImage = document.getElementById("talent-image") as any;
    console.log("ft", fTalents);
    console.log("l", $list);

    // VP
    const vph = window.innerHeight;
    const vpw = window.innerWidth;
    const vpCenter = vph / 2;

    // OS
    let currOS = 0;
    let maxOS;
    let touchStartY = 0;

    // needs time to load
    let itemH;
    let activeCenter;

    // Clone list Items
    cloneItems($list);
    const $listItems = document.querySelectorAll("#talents li") as any;

    // Preload Images
    const images = preloadTalentImages(talents);

    //
    // TIMEOUT
    //

    const timeout = setTimeout(() => {
      itemH = $listItems[0].clientHeight;
      activeCenter =
        vpw > 768
          ? vpCenter
          : $list.parentElement.getBoundingClientRect().top + itemH / 2;

      maxOS = $list.clientHeight / 2;
      updateActiveItem();
    }, 100);

    const onWheel = (e) => {
      e.preventDefault(); // Prevent the default scroll behavior

      // Update the offset based on scroll direction
      currOS += e.deltaY;

      // Loop if clones top = 0
      if (currOS > maxOS || currOS < 0) currOS = 0;

      // Apply the transform to simulate scrolling
      $list.style.transform = `translateY(-${currOS}px)`;

      // Center Detection
      updateActiveItem();
    };

    function handleTouchStart(e) {
      touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
      const touchMoveY = e.touches[0].clientY;
      const delta = touchStartY - touchMoveY;
      touchStartY = touchMoveY;
      // + down ==== - up

      currOS = currOS + delta;
      if (currOS < 0 || currOS > maxOS) currOS = 0;

      console.log("cos", currOS);

      $list.style.transform = `translateY(${-currOS}px)`;
      updateActiveItem();
    }

    $page.addEventListener("wheel", onWheel);
    $page.addEventListener("touchstart", handleTouchStart);
    $page.addEventListener("touchmove", handleTouchMove);

    const updateActiveItem = () => {
      $listItems.forEach(($listItem) => {
        const listItem_ = $listItem.getBoundingClientRect();
        const itemCenter = listItem_.top + listItem_.height / 2;
        if (Math.abs(activeCenter - itemCenter) < listItem_.height / 2) {
          $listItem.classList.add("active");
          // Activate image
          const id = $listItem.dataset.id;
          $talentImage.src = images[id];
        } else {
          $listItem.classList.remove("active");
        }
      });
    };

    return () => {
      clearTimeout(timeout);
      $page.removeEventListener("wheel", onWheel);
      $page.removeEventListener("touchstart", handleTouchStart);
      $page.removeEventListener("touchmove", handleTouchMove);
    };
  }, [talents, category]);

  return (
    <>
      <Header />
      <div id="p" className={s["p"]}>
        {/* LEFT */}
        <div className={s.l}>
          <ul>
            {categories.map((categ) => (
              <li
                className={categ == category ? "active" : ""}
                onClick={() => setCategory(categ)}
              >
                {categ}
              </li>
            ))}
          </ul>

          <figure>
            <img id="talent-image" src={talent} alt="" />
          </figure>
        </div>

        {/* RIGHT */}
        <div className={s.r}>
          <ul id="talents" ref={listRef}>
            {fTalents?.map((talent, i) => (
              <li key={talent.slug.current} data-id={i}>
                <Link to={`/talents/${talent.slug.current}`}>
                  <h2>{talent.name}</h2>
                  <span>{talent.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Talents;
