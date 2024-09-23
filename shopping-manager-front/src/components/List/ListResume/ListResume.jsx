import { Resume } from "../../Global/Resume/Resume";

export function ListResume() {
  const lists = [];
  return <Resume keyword={"liste"} address={"shoppingList"} elements={lists} />;
}
