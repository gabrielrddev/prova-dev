import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Transacoes from "../Pages/Transacoes";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="transacoes" element={<Transacoes />} />
    </Routes>
  );
}
