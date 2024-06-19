import s from "./style.module.css";
import { Logo } from "../Logo/Logo";
import { HeaderItem } from "../HeaderItem/HeaderItem";

export function Header() {
  const headerItems = ["Stock", "Repas", "Liste"];
  return (
    <div className={`row ${s.header}`}>
      <Logo />
      {headerItems.map((headerItem) => {
        return <HeaderItem itemName={headerItem} />;
      })}
    </div>
  );
}
