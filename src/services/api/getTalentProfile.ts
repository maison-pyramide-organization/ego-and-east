import sanityClient from "../sanity/client";

const getTalentProfile = async (slug) => {
  const q = `
    *[_type == "talent" && slug.current == '${slug}'][0]{
      ...,
      "gallery": gallery[] {
        "imageUrl": asset->url
      }
    }
    `;

  const profile = await sanityClient.fetch(q);

  return profile;
};

export default getTalentProfile;
