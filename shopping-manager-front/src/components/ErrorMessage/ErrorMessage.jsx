import s from "./style.module.css";

export function ErrorMessage({ messageError }) {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-7">
        <div className={`${s.errorLabel}`}>{messageError}</div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
