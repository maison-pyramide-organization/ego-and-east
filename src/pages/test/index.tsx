// import { useEffect } from "react";
import s from "./_s.module.scss";
import talent from "@a/Images/talent.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getTalents from "../../services/api/getTalents";

const Talents = () => {
  const [talents, setTalents] = useState(null) as any;
  // CLONE
  const cloneItems = (list) => {
    const items = Array.from(list.children) as any;
    const itemsNo = items.length;

    items.forEach((item, i) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.id = `item${i + itemsNo}`;
      clone.classList.add("clone");
      list.appendChild(clone);
    });
  };

  // PRELOAD IMAGES
  const preloadTalentsImages = (images) => {
    images.forEach((src) => {
      const img = new Image() as any;
      img.src = src; // This preloads the image into the browser's cache
    });
  };

  // FETCH TALENTS
  useEffect(() => {
    getTalents().then((talents) => {
      setTalents(talents);
    });
  }, []);

  // SCROLLING
  useEffect(() => {
    if (!talents) return;
    const list = document.getElementById("talents");
    cloneItems(list);

    // const images = talents.map((talent) => {
    //   return [talent.index, talent.image.asset.url];
    // });
    const images = talents.map((talent) => {
      return talent.image.asset.url;
    });

    preloadTalentsImages(images);

    const timeout = setTimeout(() => {
      const parent = document.getElementById("p") as any;
      const child = document.getElementById("talents") as any;
      const items = document.querySelectorAll("#talents li") as any;
      const image = document.getElementById("talent-image") as any;
      const viewportHeight = window.innerHeight;

      let currentOffset = 0; // Tracks the current vertical offset
      const maxOffset = child.offsetHeight - parent.offsetHeight; // Maximum offset

      parent.addEventListener("wheel", (event) => {
        event.preventDefault(); // Prevent the default scroll behavior

        // Update the offset based on scroll direction
        currentOffset += event.deltaY;

        // Clamp the offset between 0 and maxOffset
        currentOffset = Math.max(0, Math.min(currentOffset, maxOffset));

        // Loop if clones top = 0
        if (currentOffset > 2982) currentOffset = 0;

        // Apply the transform to simulate scrolling
        child.style.transform = `translateY(-${currentOffset}px)`;

        // Center Detection
        const viewportCenter = viewportHeight / 2;
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          if (Math.abs(viewportCenter - itemCenter) < rect.height / 2) {
            item.classList.add("active");
            const id = item.dataset.id;
            image.src = images[id];
          } else {
            item.classList.remove("active");
          }
        });
      });
    }, 100);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [talents]);

  return (
    <>
      <div className={s.cl} />

      <div id="p" className={s["p"]}>
        {/* LEFT */}
        <div className={s.l}>
          <ul>
            <li>all</li>
            <li>actors</li>
            <li>creatives</li>
          </ul>

          <figure>
            <img id="talent-image" src={talent} alt="" />
          </figure>
        </div>

        {/* RIGHT */}
        <div className={s.r}>
          <ul id="talents">
            {talents?.map((talent, i) => (
              <li key={talent.slug.current} data-id={i}>
                <Link to={`/talents/${talent.slug.current}`}>
                  {talent.name}
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
