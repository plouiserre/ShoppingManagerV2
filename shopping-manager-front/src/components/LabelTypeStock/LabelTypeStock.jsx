export function LabelTypeStock({ foodType }) {
  const foodTypeLabel = getType(foodType);

  function getType(typeName) {
    if (typeName === "meat") return "Viande";
    else if (typeName === "vegetables") return "Légumes";
    else return "Petit déjeuner";
  }

  return <>{foodTypeLabel}</>;
}
