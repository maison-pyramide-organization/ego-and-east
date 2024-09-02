import sanityClient from "../sanity/client";

const getPlaylists = async () => {
  const q = `
            *[_type == "playlist"]{
                id,
                link,
                button_color,
                image{
                  asset->{
                      url
                  }
                }
            }
    `;
  let playlists = await sanityClient.fetch(q);
  return playlists;
};

export default getPlaylists;
