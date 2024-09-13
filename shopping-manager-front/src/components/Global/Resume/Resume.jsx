import s from "./style.module.css";
import { CustomButton } from "../../Reusable/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export function Resume({ keyword, address, elements }) {
  const navigate = useNavigate();
  const elementsLoaded = elements !== undefined && elements.length > 0;
  const keyWordFirstLetterUppercase = getWordGoodCase(true);
  const labelList = "Liste " + keyWordFirstLetterUppercase + " actuel";
  const addressAdd = "/" + address + "/add/";
  const addressList = "/" + address + "/";
  const definedWord =
    elements.length !== undefined && elements.length > 0 ? "définis" : "défini";

  function getWordGoodCase(isUpperCase) {
    return isUpperCase
      ? (keyword.charAt(0).toUpperCase() + keyword.slice(1)).toString()
      : keyword;
  }
  return (
    <div>
      <h1>{keyWordFirstLetterUppercase} actuel</h1>
      <div style={{ display: !elementsLoaded ? "block" : "none" }}>
        <p className={`${s.text}`}>Aucun {keyword} créé pour le moment</p>
        <CustomButton
          labelButton={"Ajouter un nouvel élément"}
          actionButton={() => navigate(addressAdd)}
        />
      </div>
      <div style={{ display: elementsLoaded ? "block" : "none" }}>
        <p>
          Aujourd'hui il y a{" "}
          <span className={`${s.element}`}>
            {elements !== undefined ? elements.length : 0}
          </span>{" "}
          {keyword} {definedWord}
        </p>
        <CustomButton
          labelButton={labelList}
          actionButton={() => navigate(addressList)}
        />
      </div>
    </div>
  );
}
