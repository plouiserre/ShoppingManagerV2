import s from "./style.module.css";

export function StockResume() {
  function simulateBehavior() {
    alert("go to add stock");
  }
  return (
    <div>
      <h1>Stock actuel</h1>
      <p className={`${s.text}`}>Aucun stock programmé pour le moment</p>
      <button
        type="button"
        className={`${s.AddStock} btn btn-primary`}
        onClick={() => simulateBehavior()}
      >
        Ajouter un nouvel élémént
      </button>
    </div>
  );
}
