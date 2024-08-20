import sanityClient from "../sanity/client";

const getServices = async () => {
  const q = `
            *[_type == "service"]{
                index,
                title,
                body,
                cta,
            }
        `;
  let services = await sanityClient.fetch(q);
  return services;
};

export default getServices;
