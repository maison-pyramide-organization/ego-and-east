import s from "./_s.module.scss";
import filters from "../../../../data/talentFilters";

interface Iprops {
  category: string;
}

const Filters = (props: Iprops) => {
  let { category } = props;

  return (
    <div className={s["categories"]}>
      {filters.map((filter) => (
        <button
          key={filter.name}
          className={filter.category == category ? "active" : ""}
        >
          <a href={`/talents?category=${filter.category}`}>{filter.name}</a>
        </button>
      ))}
    </div>
  );
};
export default Filters;
