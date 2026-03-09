import client from "../contentful";

export const getTalent = async (slug: string) => {
  const { items } = await client.getEntries({
    content_type: "talent",
    "fields.slug": slug,
    limit: 1,
  });

  if (!items.length) return null;

  const { fields, sys } = items[0];

  return {
    ...fields,
    id: sys.id,
    modifiedAt: sys.updatedAt,
  };
};

