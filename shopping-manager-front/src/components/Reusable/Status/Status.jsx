import { useEffect, useState } from "react";
import { Pictogramme } from "../Pictogramme/Pictogramme";
import { calculateStatusStock } from "../../../domain/stock";

export function Status({ element }) {
  useEffect(() => {
    var status = calculateStatusStock(element);
    setStatus(status);
  }, [element]);

  const [status, setStatus] = useState();

  return (
    <>
      {element !== undefined && element.stockItems !== undefined && (
        <Pictogramme pictoName={status} height={50} width={50} />
      )}
    </>
  );
}
