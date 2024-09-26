export function getTypeFoodId(label){
    if(label == "Légumes"){
        return "vegetables"
    }else if(label == "Viande"){
        return "meat";
    }else{
        return "breakfast";
    }
}

export function getTypeFoodLabel(id){
    if (id === "meat") return "Viande";
      else if (id === "vegetables") return "Légumes";
      else return "Petit déjeuner";
}