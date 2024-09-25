import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const vpw = window.innerWidth;
let vph = window.innerHeight;

// Variables
let body;
let root;
let w;
let listW;
let list;
let items;
let images;
let itemH;
let isLL;

const initialize = () => {
  root = document.getElementById("root") as HTMLElement;
  w = document.getElementById("w") as HTMLElement;
  list = document.querySelector("#list") as HTMLElement;
  listW = document.querySelector("#list-w") as HTMLElement;
  items = [...document.querySelectorAll("#list li")] as HTMLElement[];
  itemH = (list.firstChild as HTMLElement)?.getBoundingClientRect().height;
  images = [...document.querySelectorAll("#image")] as HTMLElement[];
  body = document.body;
  // Set Variables
  document.documentElement.style.setProperty("--vh", vph + "px");
  body.style.height = vph + "px";
};

// Set the CSS variable

const setScrollPos = (pos) => {
  window.scrollTo({ top: pos });
};

/**
 * CLONE LIST ITEMS
 */
const cloneItems = () => {
  const itemsNo = items.length;
  items.forEach((item, i) => {
    const clone = item.cloneNode(true) as HTMLElement;
    clone.id = `item${i + itemsNo}`;
    clone.classList.add("clone");
    list.appendChild(clone);
  });
};

/**
 * GET TALENT IMAGE USING ID
 */
const getTalentImage = (id) => {
  if (!id) return;
  const image = images.find((img) => img.dataset.id == id);

  return image;
};

/**
 * UPDATE WRAPPER HEIGHT
 */
const updateBH = () => {
  let height: number | null = null;
  if (isLL && vpw > 768) {
    let listH = list.offsetHeight;
    height = listH * 2;
  } else {
    const itemsNo = list?.childElementCount as number;
    const extraScroll = itemH * (itemsNo - 1);
    height = vph + extraScroll - 1;
    console.log("h", height);
  }
  w.style.height = `${height}px`;
  //   root.style.overflowY = `auto`;
  //   root.style.height = `${vph}px`;
};

const slAnimation = () => {
  listW.classList.add("sl");

  let ai = list.firstChild as HTMLElement;
  let aimg = getTalentImage(ai.dataset.id);

  ai.classList.add("active");
  aimg.classList.add("active");

  const updateScroll = () => {
    const scrollPos = root.scrollTop;
    const id = Math.ceil(scrollPos / itemH);
    const el = document.querySelector(`#item${id}`) as HTMLElement;
    if (el && el !== ai) {
      const newId = parseInt(el.dataset.id as any);
      const img = getTalentImage(newId);
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
  updateScroll();
};

const llAnimation = () => {
  const updateScroll = () => {
    const scrollPos = root.scrollTop;
    let id = Math.ceil(scrollPos / itemH);
    id = vpw > 768 ? id + x - 1 : id;
    const el = document.querySelector(`#item${id}`) as HTMLElement;
    if (ai !== el) {
      const id = parseInt(el.dataset.id as any);
      const img = getTalentImage(id);
      ai.classList.remove("active");
      el?.classList.add("active");
      aimg.classList.remove("active");
      img.classList.add("active");
      ai = el;
      aimg = img;
    }

    if (scrollPos >= listH / 2) root.scrollTop = 0;
    list.style.transform = `translateY(${-scrollPos}px)`;
    requestAnimationFrame(updateScroll);
  };

  let ai = list.firstChild;
  let aimg = getTalentImage(ai.dataset.id);
  cloneItems();
  ai.classList.add("active");
  aimg.classList.add("active");
  let listH = list.offsetHeight;
  const numberOfVisibleItems = Math.ceil(vph / itemH);
  const x = Math.floor(numberOfVisibleItems / 2);
  updateScroll();
};

const animate = () => {
  initialize();
  setScrollPos(0);

  const numberOfVisibleItems = Math.ceil(vph / itemH);
  isLL = numberOfVisibleItems < items.length;
  if (vpw < 768) {
    slAnimation();
    updateBH();
  } else if (isLL) {
    llAnimation();
    updateBH();
  } else {
    slAnimation();
    updateBH();
  }
};

export default animate;
