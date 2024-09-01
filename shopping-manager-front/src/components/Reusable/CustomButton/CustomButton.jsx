import s from "./style.module.css";

export function CustomButton({ labelButton, actionButton, customClass }) {
  var customCssClass = customClass != null ? customClass : "btn btn-primary";

  return (
    <button
      type="button"
      className={`${s.AddStock} ${customCssClass}`}
      onClick={() => actionButton()}
    >
      {labelButton}
    </button>
  );
}
