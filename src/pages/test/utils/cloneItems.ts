
const cloneItems = (list) => {
  const items = Array.from(list.children) as any;

  items.forEach((item) => {
    const clone = item.cloneNode(true) as HTMLElement;
    clone.classList.add("clone");
    list.appendChild(clone);
  });
};
export default cloneItems;

// export const createList = ($list, talents) => {

//   const $li =  document.createElement('li');
//   const liChildren = (
//      <Link to={`/talents/${talent.slug.current}`}>
//        <h2>{talent.name}</h2>
//        <span>{talent.category}</span>
//      </Link>;
//   )
//   ReactDOM.render($li, liChildren)
// };
