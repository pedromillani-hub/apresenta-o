function StatusBadge({ status }) {
  let classe = "status-badge status-outro";

  if (status === "Concluído") {
    classe = "status-badge status-concluido";
  } else if (status === "Em desenvolvimento") {
    classe = "status-badge status-desenvolvimento";
  } else if (status === "Planejamento") {
    classe = "status-badge status-planejamento";
  }

  return <span className={classe}>{status}</span>;
}

export default StatusBadge;
