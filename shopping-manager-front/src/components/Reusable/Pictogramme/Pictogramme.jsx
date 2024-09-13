import coffee from "../../../assets/images/cafe.png";
import meat from "../../../assets/images/viande.png";
import vegetables from "../../../assets/images/legumes.png";
import error from "../../../assets/images/error.png";
import ok from "../../../assets/images/ok.png";
import warning from "../../../assets/images/warning.png";

export function Pictogramme({
  pictoName,
  height,
  width,
  className,
  clickName,
  actionName,
}) {
  function getPictoFromPictoName(name) {
    if (name === "vegetables") return vegetables;
    else if (name === "meat") return meat;
    else if (name === "breakfast") return coffee;
    else if (name === "error") return error;
    else if (name === "ok") return ok;
    else if (name === "warning") return warning;
    else return "";
  }

  return (
    <img
      className={`${className}`}
      src={getPictoFromPictoName(pictoName)}
      height={height}
      width={width}
      onClick={() => clickName(actionName)}
    />
  );
}
