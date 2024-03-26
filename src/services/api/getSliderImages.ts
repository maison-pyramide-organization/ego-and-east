import sanityClient from "../sanity/client";

const getSliderImages = async () => {
    const q = `
    *[_type == "slide"]{
        title,
        index,
        mainImage{
            asset->{
                url
            }
        }
    }
    `;
    const slides = await sanityClient.fetch(q);
    const formatedSlides = formateImages(slides);
    return formatedSlides;
};

const formateImages = (slides: any) => {
    const formatedImages = slides.map((slide: any) => ({
        title: slide.title,
        index: slide.index,
        url: slide.mainImage?.asset?.url,
    }));
    formatedImages.sort((a: any, b: any) => a.index - b.index);

    return formatedImages;
};

export default getSliderImages;
