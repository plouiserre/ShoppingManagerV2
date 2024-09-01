import { Header } from "./components/Global/Header/Header";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Outlet />
    </div>
  );
}
