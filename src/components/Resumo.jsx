function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <div className="resumo">
      <div className="resumo-item">
        <span className="resumo-numero">{total}</span>
        <span className="resumo-rotulo">Total de projetos</span>
      </div>
      <div className="resumo-item">
        <span className="resumo-numero">{concluidos}</span>
        <span className="resumo-rotulo">Concluídos</span>
      </div>
      <div className="resumo-item">
        <span className="resumo-numero">{emDesenvolvimento}</span>
        <span className="resumo-rotulo">Em desenvolvimento</span>
      </div>
    </div>
  );
}

export default Resumo;
