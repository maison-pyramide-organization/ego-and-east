import { gsap } from "gsap";

// const animateMenuIcon = () => {
//     const tl = gsap.timeline();
// };

const getMenuAnimationTl = () => {
    const menuIconAnimationTl = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
            console.log("done");
        },
    });

    menuIconAnimationTl
        .to("#bar_1", {
            y: "-29px",
        })
        .to(
            "#bar_2",
            {
                y: "-8px",
            },
            "="
        );
    return menuIconAnimationTl;
};

// export default animateMenuIcon;
// export default menuIconAnimationTl;
export default getMenuAnimationTl;
