import s from "./style.module.css";
export function BootstrapIcon({ cssClass, onClickAction, param }) {
  return (
    <i
      className={`${cssClass} ${s.btnaction}`}
      onClick={() => onClickAction(param)}
    ></i>
  );
}
