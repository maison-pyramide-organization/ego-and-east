import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const vpw = window.innerWidth;
let vph = window.innerHeight;

const setScrollPos = (pos) => {
  window.scrollTo({ top: pos });
};

const updateBH = (isLL, list, itemH) => {
  let height: number | null = null;
  if (isLL) {
    let listH = list.offsetHeight;
    height = listH * 2;
  } else {
    const itemsNo = list?.childElementCount as number;
    const extraScroll = itemH * (itemsNo - 1);
    height = window.innerHeight + extraScroll - 1;
  }
  document.body.style.height = `${height}px`;
};

const slAnimation = (listW, list, itemHeight) => {
  listW.classList.add("sl");

  const images = [...document.querySelectorAll("#image")] as HTMLElement[];
  let ai = list.firstChild as HTMLElement;
  let aimg = getTalentImage(images, ai.dataset.id);

  ai.classList.add("active");
  aimg.classList.add("active");

  const updateScroll = () => {
    const scrollPos = window.scrollY;
    const id = Math.ceil(scrollPos / itemHeight);

    const el = document.querySelector(`#item${id}`) as HTMLElement;
    if (el && el !== ai) {
      const newId = parseInt(el.dataset.id as any);
      const img = getTalentImage(images, newId);
      ai.classList.remove("active");
      el.classList.add("active");
      aimg.classList.remove("active");
      img.classList.add("active");
      ai = el;
      aimg = img;
    }

    list.style.transform = `translateY(${-scrollPos}px)`;
    requestAnimationFrame(updateScroll);
  };

  const onResize = () => {
    // Recalculate itemHeight if needed and restart animation
    itemHeight = list.firstChild.offsetHeight; // Update itemHeight based on current elements
    updateScroll(); // Restart the scroll animation
    updateBH(false,list,itemHeight)
  };

  window.addEventListener("resize", onResize);
  updateScroll();
};

// const slAnimation = (listW, list, itemHeight) => {
//   listW.classList.add("sl");
//   // const itemsNo = list?.childElementCount as number;
//   // const extraScroll = itemHeight * (itemsNo - 1);
//   // document.body.style.height = `${vph + extraScroll - 1}px`;

//   const updateScroll = () => {
//     const scrollPos = window.scrollY;
//     const id = Math.ceil(scrollPos / itemHeight);

//     const el = document.querySelector(`#item${id}`) as HTMLElement;
//     if (ai !== el) {
//       if (!el) return;
//       const id = parseInt(el.dataset.id as any);
//       const img = getTalentImage(images, id);
//       ai.classList.remove("active");
//       el?.classList.add("active");
//       aimg.classList.remove("active");
//       img.classList.add("active");
//       ai = el;
//       aimg = img;
//     }
//     list.style.transform = `translateY(${-scrollPos}px)`;
//     requestAnimationFrame(updateScroll);
//   };
//   const images = [...document.querySelectorAll("#image")] as HTMLElement[];
//   let ai = list.firstChild;
//   let aimg = getTalentImage(images, ai.dataset.id);
//   ai.classList.add("active");
//   aimg.classList.add("active");
//   updateScroll();
// };

const llAnimation = (itemHeight, list, items) => {
  const cloneItems = () => {
    const itemsNo = items.length;
    items.forEach((item, i) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.id = `item${i + itemsNo}`;
      clone.classList.add("clone");
      list.appendChild(clone);
    });
  };
  const updateScroll = () => {
    const scrollPos = window.scrollY;
    let id = Math.ceil(scrollPos / itemHeight);
    id = vpw > 768 ? id + x - 1 : id;
    const el = document.querySelector(`#item${id}`) as HTMLElement;
    if (ai !== el) {
      const id = parseInt(el.dataset.id as any);
      const img = getTalentImage(images, id);
      ai.classList.remove("active");
      el?.classList.add("active");
      aimg.classList.remove("active");
      img.classList.add("active");
      ai = el;
      aimg = img;
    }
    if (scrollPos >= listH / 2) setScrollPos(0);
    list.style.transform = `translateY(${-window.scrollY}px)`;
    requestAnimationFrame(updateScroll);
  };

  const images = [...document.querySelectorAll("#image")] as HTMLElement[];
  let ai = list.firstChild;
  let aimg = getTalentImage(images, ai.dataset.id);
  cloneItems();
  ai.classList.add("active");
  aimg.classList.add("active");
  let listH = list.offsetHeight;
  // document.body.style.height = `${listH * 2}px`;
  const numberOfVisibleItems = Math.ceil(vph / itemHeight);
  const x = Math.floor(numberOfVisibleItems / 2);
  updateScroll();
};

const getTalentImage = (images, id) => {
  if (!id) return;
  const image = images.find((img) => img.dataset.id == id);

  return image;
};

const animate = () => {
  setScrollPos(0);
  const list = document.querySelector("#list") as HTMLElement;
  const listW = document.querySelector("#list-w") as HTMLElement;
  let items = [...document.querySelectorAll("#list li")] as HTMLElement[];
  const itemHeight = (list.firstChild as HTMLElement)?.getBoundingClientRect()
    .height;

  const numberOfVisibleItems = Math.ceil(vph / itemHeight);
  const isll = numberOfVisibleItems < items.length;

  if (isll) llAnimation(itemHeight, list, items);
  else slAnimation(listW, list, itemHeight);

  updateBH(isll, list, itemHeight);

  // window.addEventListener("resize", () => {
  //   if (window.innerHeight != vph) {
  //     vph == window.innerHeight;
  //     updateBH(isll, list, itemHeight);
  //   }
  // });
};

export default animate;
