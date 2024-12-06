import { lista } from "../../data";
import "./styles.css";

function ContentTransacoes() {
  return (
    <div className="containerTransacoes">
      <h1 className="tituloTransacoes">Trasações</h1>
      <div className="tabela">
        {lista &&
          lista.map((item) => (
            <div key={item.codigo} className="linhaDaTabela">
              <p className="textoDaLinha">{item.codigo}</p>
              <p className="textoDaLinha">{item.descricao}</p>
              <p className="textoDaLinha">{item.entrada}</p>
              <p className="textoDaLinha">{item.saida}</p>
              <p className="textoDaLinha">{item.total}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ContentTransacoes;
