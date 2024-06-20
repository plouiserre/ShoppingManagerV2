import s from "./style.module.css";

export function HeaderItem({ itemName, onClick }) {
  return (
    <div className={`col-3 ${s.headerItem}`} onClick={() => onClick(itemName)}>
      <span>{itemName}</span>
    </div>
  );
}
