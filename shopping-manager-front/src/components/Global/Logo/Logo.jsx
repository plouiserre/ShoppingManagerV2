import s from "./style.module.css";

export function Logo({ onClick }) {
  return (
    <div className={`col-2 ${s.logo}`} onClick={onClick}>
      <span>MyStock</span>
    </div>
  );
}
