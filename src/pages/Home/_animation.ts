import gsap from "gsap";
import { SplitText } from "gsap/all";

export const animation = () => {
  const tl = gsap.timeline();
  const $p = document.getElementById("p");
  const $f_logo = document.querySelector(`[a-id="f-lo"]`);
  const $ab = document.querySelector(`[a-id="ab"]`);
  const ab_split = SplitText.create($ab, { type: "lines", mask: "lines" });

  tl.set($p, {
    opacity: 1,
  })
    .from($f_logo, {
      // yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    })
    .from(
      ab_split.lines,
      {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      },
      "> -0.4"
    )
    .from(
      ".y",
      {
        yPercent: 100,
        duration: 0.4,
        ease: "power.Out",
      },
      "> -0.6"
    )

    .from(".u", {
      xPercent: -100,
      duration: 0.4,
      ease: "power2.Out",
    });

  // INSTAGRAM LINK ANIMATION
  const $ig = document.querySelector(`[text-animation="ig"]`);
  const ig_split = SplitText.create($ig, { type: "chars" });
  $ig?.addEventListener("mouseenter", () => {
    gsap.to(ig_split.chars, {
      yPercent: -100,
      // duration: 0.5,
      stagger: { each: 0.01 },
      overwrite: true,
      power: "power4.inOut",
    });
  });
  $ig?.addEventListener("mouseleave", () => {
    gsap.to(ig_split.chars, {
      yPercent: 0,
      duration: 0.4,
      stagger: { each: 0.01 },
      power: "power4.inOut",
    });
  });
};
