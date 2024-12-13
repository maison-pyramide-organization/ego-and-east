// import { useEffect } from "react";
import s from "./_s.module.scss";
import talent from "@a/Images/talent.png";
import { Link } from "react-router-dom";

const Talents = () => {



  return (
    <>
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
          <ul>
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
