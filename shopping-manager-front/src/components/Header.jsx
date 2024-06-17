import s from "./style.module.css";

export function Header() {
  return (
    <div className={`row ${s.header}`}>
      <div className={`col-4 ${s.headerItem}`}>MyStock</div>
      <div className={`col-3 ${s.headerItem}`}>Stock</div>
      <div className={`col-3 ${s.headerItem}`}>Repas</div>
      <div className={`col-2 ${s.headerItem}`}>Liste</div>
    </div>
  );
}
