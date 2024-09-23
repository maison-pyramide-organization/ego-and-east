import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const vpw = window.innerWidth;
let vph = window.innerHeight;
document.documentElement.style.setProperty("--vh", `${vph}px`);

const setScrollPos = (pos) => {
  window.scrollTo({ top: pos });
};

const slAnimation = (listW, list, itemHeight) => {
  listW.classList.add("sl");
  const itemsNo = list?.childElementCount as number;
  const extraScroll = itemHeight * (itemsNo - 1);
  document.body.style.height = `${vph + extraScroll}px`;

  const slUpdateScroll = () => {
    list.style.transform = `translateY(${-window.scrollY}px)`;
    requestAnimationFrame(slUpdateScroll);
  };
  slUpdateScroll();
};

const llAnimation = (list, items) => {
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

const observeItems = (isll, listW, items, itemHeight) => {
  if (!items.length) return;
  const images = [...document.querySelectorAll("#image")] as HTMLElement[];
  let ci;
  const p = document.getElementById("p") as HTMLElement;
  const pBCR = p.getBoundingClientRect();
  const pCenter = pBCR.top + pBCR.height / 2;
  const lWBCR = listW.getBoundingClientRect();
  const lWCenter = lWBCR.top + lWBCR.height / 2;
  let center = vpw > 768 ? pCenter : lWCenter;
  if (!isll) center = lWBCR.top + itemHeight / 2;

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
      start: `top ${center}px`,
      end: `+=${itemHeight + 1}`,
      // markers: true,
      invalidateOnRefresh: true,
      onEnter: () => enter(item),
      onLeave: () => leave(item),
      onEnterBack: () => enter(item),
      onLeaveBack: () => leave(item),
    });
  });
};

const animate = () => {
  const imgW = document.getElementById("img-w");
  imgW?.addEventListener("click", () => {
    window.location.reload();
  });

  setScrollPos(0);
  const list = document.querySelector("#list") as HTMLElement;
  const listW = document.querySelector("#list-w") as HTMLElement;
  let items = [...document.querySelectorAll("#list li")] as HTMLElement[];
  const itemHeight = (list.firstChild as HTMLElement)?.getBoundingClientRect()
    .height;

  const numberOfVisibleItems = Math.ceil(vph / itemHeight);
  const isll = numberOfVisibleItems < items.length;

  if (isll) llAnimation(list, items);
  else slAnimation(listW, list, itemHeight);

  items = [...document.querySelectorAll("#list li")] as HTMLElement[];
  observeItems(isll, listW, items, itemHeight);
};

export default animate;
