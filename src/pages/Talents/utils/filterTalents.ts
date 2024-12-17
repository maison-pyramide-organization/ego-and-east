const filterTalents = (talents, category) => {

  if (!talents) return null;
  if (category == "all") return talents;
  
  category = category.slice(0,-1)

  const filteredTalents = talents.filter(
    (talent) => talent.category == category
  );

  return filteredTalents;
};

export default filterTalents;
