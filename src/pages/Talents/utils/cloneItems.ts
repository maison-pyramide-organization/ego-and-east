
const cloneItems = (list) => {
  const items = Array.from(list.children) as any;

  items.forEach((item) => {
    const clone = item.cloneNode(true) as HTMLElement;
    clone.classList.add("clone");
    list.appendChild(clone);
  });
};
export default cloneItems;
