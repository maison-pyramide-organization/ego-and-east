import s from "../../_s.module.scss";

interface Iprops {
  brands: any[];
}

export default function Brands(props: Iprops) {
  const { brands } = props;

  return (
    <section className={s["s-brands"]}>
      <h2>
        BRANDS
        <span>PARTNERSHIPS</span>
      </h2>
      <ul className="h-s">
        {brands.map((brand) => (
          <li key={brand.sys.id}>
            <figure>
              <img src={brand.fields.file.url} alt="" />
              <figcaption>{brand.fields.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
