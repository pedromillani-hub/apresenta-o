import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
}) {
  return (
    <article className={destaque ? "projeto-card projeto-destaque" : "projeto-card"}>
      {destaque && <strong className="selo-destaque">★ Projeto em destaque</strong>}

      <div className="projeto-topo">
        <h3>{titulo}</h3>
        <StatusBadge status={status} />
      </div>

      <p className="projeto-descricao">{descricao}</p>
      <p className="projeto-responsavel">Responsável: {responsavel}</p>

      <div className="projeto-tags">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag key={tecnologia} nome={tecnologia} />
        ))}
      </div>
    </article>
  );
}

export default ProjetoCard;
