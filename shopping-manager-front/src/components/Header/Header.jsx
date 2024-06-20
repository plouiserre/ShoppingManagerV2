import s from "./style.module.css";
import { Logo } from "../Logo/Logo";
import { HeaderItem } from "../HeaderItem/HeaderItem";
import { useNavigate } from "react-router-dom";

export function Header(props) {
  const navigate = useNavigate();
  function goToPage(itemName) {
    navigate("/" + itemName + "/");
  }
  const headerItems = ["Stock", "Repas", "Liste"];
  return (
    <div className={`row ${s.header}`}>
      <Logo onClick={() => navigate("/")} />
      {headerItems.map((headerItem) => {
        return <HeaderItem itemName={headerItem} onClick={goToPage} />;
      })}
    </div>
  );
}
