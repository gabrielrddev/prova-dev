import "./styles.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="containerHeader">
      <h1 className="titleHeader">MyFinance</h1>
      <div className="containerItensHeader">
        <Link className="linkHeader" to="/">
          Home
        </Link>
        <Link className="linkHeader" to="transacoes">
          Transações
        </Link>
      </div>
    </div>
  );
}

export default Header;
