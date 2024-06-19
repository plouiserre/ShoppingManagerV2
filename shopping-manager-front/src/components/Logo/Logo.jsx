import s from "./style.module.css";

export function Logo() {
  return (
    <div className={`col-2 ${s.logo}`}>
      <span>MyStock</span>
    </div>
  );
}
