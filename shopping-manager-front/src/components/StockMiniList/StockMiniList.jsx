import { Pictogramme } from "../Pictogramme/Pictogramme";
export function StockMiniList({ stock }) {
  return (
    <div key={stock.Id}>
      {stock.Name} {stock.Quantity}{" "}
      <Pictogramme pictoName={stock.Type} height={50} width={50} />
    </div>
  );
}
