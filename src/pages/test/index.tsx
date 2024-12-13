// import { useEffect } from "react";
import s from "./_s.module.scss";
import talent from "@a/Images/talent.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Talents = () => {
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

  useEffect(() => {
    const list = document.getElementById("talents");
    cloneItems(list);
    const timeout = setTimeout(() => {
      const parent = document.getElementById("p") as any;
      const child = document.getElementById("talents") as any;
      const items = document.querySelectorAll("#talents li");
      const viewportHeight = window.innerHeight;

      let currentOffset = 0; // Tracks the current vertical offset
      const maxOffset = child.offsetHeight - parent.offsetHeight; // Maximum offset

      parent.addEventListener("wheel", (event) => {
        event.preventDefault(); // Prevent the default scroll behavior

        // Update the offset based on scroll direction
        currentOffset += event.deltaY;

        // Clamp the offset between 0 and maxOffset
        currentOffset = Math.max(0, Math.min(currentOffset, maxOffset));

        // Apply the transform to simulate scrolling
        child.style.transform = `translateY(-${currentOffset}px)`;

        // Center Detection
        const viewportCenter = viewportHeight / 2;
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          if (Math.abs(viewportCenter - itemCenter) < rect.height / 2) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      });
    }, 100);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

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
            <img src={talent} alt="" />
          </figure>
        </div>

        {/* RIGHT */}
        <div className={s.r}>
          <ul id="talents">
            <li>
              <Link to="/talents/nour-seraj">mosa mosa</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">wael wael</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">mosa mosa</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">donia donia</Link>
            </li>
            <li className={s.active}>
              <Link to="/talents/nour-seraj">mosa mosa</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">laila laila</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">amina amina</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">farah farah</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">biba biba</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">mosa mosa</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">donia donia</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">mosa mosa</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">laila laila</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">amina anmina</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">farah farah</Link>
            </li>
            <li>
              <Link to="/talents/nour-seraj">biba biba</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Talents;
