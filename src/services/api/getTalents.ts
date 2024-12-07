import sanityClient from "../sanity/client";

const getTalents = async () => {
  const q = `
            *[_type == "talent"]{
                index,
                name,
                slug,
                category,
                image{
                  asset->{url}
                },
            }
        `;
  let talents = await sanityClient.fetch(q);
  return talents;
};

export default getTalents;
