import s from "./style.module.css";

export function HeaderItem({ itemName }) {
  return (
    <div className={`col-3 ${s.headerItem}`}>
      <span>{itemName}</span>
    </div>
  );
}
