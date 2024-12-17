import s from "./_s.module.scss";
import talent from "@a/Images/talent.png";
import { useEffect, useState } from "react";
import getTalents from "../../services/api/getTalents";
import preloadTalentImages from "./utils/preloadImages";
import cloneItems from "./utils/cloneItems";
import Header from "../../components/Header";
import filterTalents from "./utils/filterTalents";
import { Link, useLocation } from "react-router-dom";

const categories = ["all", "actors", "creatives", "musicians"];

const Talents = () => {
  const [talents, setTalents] = useState(null) as any;
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const category = searchParams.get("category") || "all";
  const fTalents = filterTalents(talents, category);

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
    const $list = document.getElementById("talents") as any;
    const $talentImage = document.getElementById("talent-image") as any;
    const $cont = document.getElementById("cont") as any;
    let $listItems = document.querySelectorAll("#talents li") as any;

    // VP
    const vph = window.innerHeight;
    const vpw = window.innerWidth;
    const vpCenter = vph / 2 + 35;
    const isMob = vpw <= 768;
    // OS
    let currOS = 1;
    let maxOS;
    let touchStartY = 0;

    // needs time to load
    let itemH;
    let activeCenter;
    let nofVI;
    let isSL;

    // Clone list Items
    // cloneItems($list);

    // Preload Images
    const images = preloadTalentImages(fTalents);

    //
    // TIMEOUT
    //
    const timeout = setTimeout(() => {
      itemH = $listItems[0].clientHeight;
      nofVI = Math.ceil(vph / itemH);
      isSL = nofVI > fTalents.length;

      // Clone list Items
      if (!isSL) cloneItems($list);
      $listItems = document.querySelectorAll("#talents li") as any;

      if (isSL) $cont.classList.add("s");
      else $cont.classList.remove("s");

      activeCenter = !isMob
        ? vpCenter
        : $list.parentElement.getBoundingClientRect().top + itemH / 2;

      maxOS = isSL ? $list.clientHeight - itemH : $list.clientHeight / 2;

      $list.style.transform = `translateY(-${currOS}px)`;
      updateActiveItem();
      $page.style.opacity = "1";
    }, 100);

    const onWheel = (e) => {
      e.preventDefault(); // Prevent the default scroll behavior

      // Update the offset based on scroll direction
      currOS += e.deltaY;

      const endofList = currOS > maxOS;

      // Loop if clones top = 0
      if (isSL && endofList) {
        currOS = maxOS;
      }
      if (!isSL && endofList) {
        currOS = 0;
      }
      if (currOS <= 0) currOS = 1;

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

    $page.addEventListener("wheel", onWheel);
    $page.addEventListener("touchstart", handleTouchStart);
    $page.addEventListener("touchmove", handleTouchMove);

    return () => {
      clearTimeout(timeout);
      $page.removeEventListener("wheel", onWheel);
      $page.removeEventListener("touchstart", handleTouchStart);
      $page.removeEventListener("touchmove", handleTouchMove);
    };
  }, [talents]);

  return (
    <>
      <Header />
      <div id="p" className={s["p"]}>
        {/* LEFT */}
        <div className={s.l}>
          <ul>
            {categories.map((categ) => (
              <li
                key={categ}
                className={categ == category ? "active" : ""}
                // onClick={() => onCatLink(categ)}
              >
                <a href={`/test?category=${categ}`}>{categ}</a>
              </li>
            ))}
          </ul>

          <figure>
            <img id="talent-image" src={talent} alt="" />
          </figure>
        </div>

        {/* RIGHT */}
        <div className={s.r} id="cont">
          <ul id="talents">
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
