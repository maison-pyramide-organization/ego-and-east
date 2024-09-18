const filterTalents = (talents, category) => {
  if (!talents) return;
  if (category == "all") return talents;

  const filteredTalents = talents.filter(
    (talent) => talent.category == category
  );

  return filteredTalents;
};

export default filterTalents;
