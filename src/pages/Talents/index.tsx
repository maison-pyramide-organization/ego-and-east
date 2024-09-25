import s from "./_s.module.scss";
import { useEffect, useState } from "react";
import getTalents from "../../services/api/getTalents";
import animate from "./_animate";
import Header from "../../components/Header";
import Filters from "./components/filter";
import filterTalents from "./utils/filterTalents";
import { useLocation } from "react-router-dom";
// import Ruler from "../../components/ruler/ruler";

const Talents = () => {
    const [talents, setTalents] = useState(null) as any;
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const category = searchParams.get("category") || "all";
    const [ft, setFt] = useState(null) as any;

    useEffect(() => {
        getTalents().then((talents) => {
            setTalents(talents);
            const filteredTalents = filterTalents(talents, category);
            setFt(filteredTalents);
        });
    }, []);

    useEffect(() => {
        if (ft?.length) animate();
    }, [talents]);

    if (!talents) return null;

    return (
        <>
            {/* <Ruler /> */}
            <Header />
            <div className={s.w} id="w">
                <div id="p" className={s["p"]}>
                    <Filters category={category} />

                    {/* IMAGES */}
                    <div id="img-w" className={s["img-w"]}>
                        {ft?.map((talent) => (
                            <img
                                key={talent.index}
                                id="image"
                                data-id={talent.index}
                                src={talent.image.asset.url}
                                alt={talent.name}
                            />
                        ))}
                    </div>

                    {/* LIST */}
                    <div id="list-w" className={s["list-w"]}>
                        <ul id="list" className={s["list"]}>
                            {ft?.map((talent, i) => (
                                <li
                                    id={`item${i}`}
                                    data-id={talent.index}
                                    className={s.talent}
                                    key={talent.name}
                                >
                                    <h2>{talent.name}</h2>
                                    <span>{talent.category}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Talents;
