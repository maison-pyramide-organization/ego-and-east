// PRELOAD IMAGES
const preloadTalentImages = (talents) => {
  const images = talents.map((talent) => {
    return talent.image.asset.url;
  });

  images.forEach((src) => {
    const img = new Image() as any;
    img.src = src; // This preloads the image into the browser's cache
  });

  return images;
};

export default preloadTalentImages;
