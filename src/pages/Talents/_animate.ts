import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const vph = window.innerHeight;
const itemHeight = 130;

const setScrollPos = (pos) => {
  window.scrollTo({ top: pos });
};

const slAnimation = () => {
  const list = document.querySelector("#list") as HTMLElement;
  const listW = list?.parentElement as HTMLElement;
  listW.style.top = `calc(50% - ${130 / 2}px)`;
  const itemsNo = list?.childElementCount as number;
  const extraScroll = itemHeight * (itemsNo - 1);
  document.body.style.height = `${vph + extraScroll}px`;

  const slUpdateScroll = () => {
    list.style.transform = `translateY(${-window.scrollY}px)`;
    requestAnimationFrame(slUpdateScroll);
  };
  slUpdateScroll();
};

const llAnimation = () => {
  let list = document.querySelector("#list") as HTMLElement;
  let items = [...document.querySelectorAll("#list li")];

  const cloneItems = () => {
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.classList.add("clone");
      list.appendChild(clone);
    });
  };
  const updateScroll = () => {
    const scrollPos = window.scrollY;
    if (scrollPos >= listH / 2) setScrollPos(0);
    list.style.transform = `translateY(${-window.scrollY}px)`;
    requestAnimationFrame(updateScroll);
  };

  cloneItems();
  let listH = list.offsetHeight;
  document.body.style.height = `${listH * 2}px`;
  updateScroll();
};

const getTalentImage = (images, id) => {
  if (!id) return;
  const image = images.find((img) => img.dataset.id == id);
  return image;
};

const observeItems = (items) => {
  if (!items.length) return;
  const images = [...document.querySelectorAll("#image")] as HTMLElement[];
  let ci;

  const enter = (item) => {
    const id = parseInt(item.dataset.id);
    const image = getTalentImage(images, id);
    image.classList.add("active");
    ci = image;
    item.classList.add("active");
  };

  const leave = (item) => {
    ci.classList.remove("active");
    item.classList.remove("active");
  };

  items.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top center",
      end: `+=${itemHeight + 1}`,
      onEnter: () => enter(item),
      onLeave: () => leave(item),
      onEnterBack: () => enter(item),
      onLeaveBack: () => leave(item),
    });
  });
};

const animate = () => {
  setScrollPos(0);
  let items = [...document.querySelectorAll("#list li")] as HTMLElement[];
  const numberOfVisibleItems = Math.ceil(vph / itemHeight);
  if (numberOfVisibleItems < items.length) llAnimation();
  else slAnimation();
  items = [...document.querySelectorAll("#list li")] as HTMLElement[];
  observeItems(items);
};

export default animate;
