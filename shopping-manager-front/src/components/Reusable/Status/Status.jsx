import { useEffect, useState } from "react";
import { Pictogramme } from "../Pictogramme/Pictogramme";

export function Status({ element }) {
  useEffect(() => {
    var old = [];
    var nearlyOld = [];
    var ok = [];
    element.stockItems.map((item) => {
      var peremtion = new Date(item.DatePeremption);
      var today = new Date();
      if (peremtion < today) {
        old.push(item);
      } else {
        var diffTime = Math.abs(peremtion - today);
        var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 2) nearlyOld.push(item);
        else ok.push(item);
      }
    });
    if (old.length > 0) {
      setStatus("error");
    } else if (
      (nearlyOld.length > 0 && ok.length == 0) ||
      (nearlyOld.length > 0 && ok.length > 0 && nearlyOld.length > ok.length)
    ) {
      setStatus("warning");
    } else {
      setStatus("ok");
    }
  }, [element]);

  const [status, setStatus] = useState();

  return (
    <>
      <Pictogramme pictoName={status} height={50} width={50} />
    </>
  );
}
