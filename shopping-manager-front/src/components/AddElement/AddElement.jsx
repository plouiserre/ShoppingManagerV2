import s from "./style.module.css";

export function AddElement({ labelButton, actionButton }) {
  return (
    <button
      type="button"
      className={`${s.AddStock} btn btn-primary`}
      onClick={() => actionButton()}
    >
      {labelButton}
    </button>
  );
}
