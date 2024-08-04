import { useEffect, useState } from "react";
import { Pictogramme } from "../Pictogramme/Pictogramme";
export function Status({ element }) {
  const [status, setStatus] = useState();
  useEffect(() => {
    var peremtion = new Date(element.DatePeremption);
    var today = new Date();
    if (peremtion < today) {
      setStatus("error");
    } else {
      var diffTime = Math.abs(peremtion - today);
      var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays < 2) setStatus("warning");
      else setStatus("ok");
    }
  }, [element]);

  return (
    <>
      <Pictogramme pictoName={status} height={50} width={50} />
    </>
  );
}
