import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const animate = () => {
  const list = document.querySelector("#list") as HTMLElement;
  let items = [...document.querySelectorAll("#list li")];
  let clones = [] as HTMLElement[];
  let listHeight;
  let clonesHeight;
  if (!list) return null;

  const cloneItems = () => {
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.classList.add("clone");
      list.appendChild(clone);
      clones.push(clone);
    });
  };

  const getClonesHeight = () => {
    let height = 0;
    clones.forEach((clone) => {
      height += clone.offsetHeight;
    });
    return height;
  };

  const setScrollPos = (pos) => {
    window.scrollTo({ top: pos });
  };

  const calcDimensions = () => {
    listHeight = list.offsetHeight;
    clonesHeight = getClonesHeight();
  };

  const updateScroll = () => {
    const scrollPos = window.scrollY;
    if (scrollPos >= clonesHeight) setScrollPos(0);
    list.style.transform = `translateY(${-window.scrollY}px)`;
    requestAnimationFrame(updateScroll);
  };

  function onLoad() {
    setScrollPos(0);
    cloneItems();
    calcDimensions();
    document.body.style.height = `${listHeight * 2}px`;
    updateScroll();
  }

  onLoad();
  animate2();
};

const getTalentImage = (images, id) => {
  if (!id) return;
  const image = images.find((img) => img.dataset.id == id);
  return image;
};
const animate2 = () => {
  const items = [...document.querySelectorAll("#list li")] as HTMLElement[];
  const images = [...document.querySelectorAll("#image")] as HTMLElement[];
  let ci;

  gsap.registerPlugin(ScrollTrigger);
  const elH = items[0].offsetHeight;

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
      end: `+=${elH + 1}`,
      onEnter: () => enter(item),
      onLeave: () => leave(item),
      onEnterBack: () => enter(item),
      onLeaveBack: () => leave(item),
    });
  });
};

export default animate;
