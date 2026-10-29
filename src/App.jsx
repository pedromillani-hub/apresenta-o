import "./App.css";
import Secao from "./components/Secao";
import Resumo from "./components/Resumo";
import ProjetoCard from "./components/ProjetoCard";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos e movimentações.",
    responsavel: "Ana",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true,
  },
  {
    id: 2,
    titulo: "Feira Digital de Trocas",
    descricao: "Cadastro, pesquisa e reserva de itens para troca entre alunos.",
    responsavel: "Bruno",
    status: "Em desenvolvimento",
    tecnologias: ["HTML", "CSS", "JavaScript", "Local Storage"],
    destaque: false,
  },
  {
    id: 3,
    titulo: "Agenda de Laboratórios",
    descricao: "Reserva de horários dos laboratórios de informática da escola.",
    responsavel: "Carla",
    status: "Concluído",
    tecnologias: ["React", "Firebase"],
    destaque: true,
  },
  {
    id: 4,
    titulo: "App de Controle Financeiro",
    descricao: "Registro de receitas e despesas com gráficos mensais.",
    responsavel: "Diego",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Chart.js", "Node.js"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "Catálogo de Cursos",
    descricao: "Listagem de cursos com controle de vagas disponíveis.",
    responsavel: "Eduarda",
    status: "Concluído",
    tecnologias: ["React", "Vite"],
    destaque: false,
  },
  {
    id: 6,
    titulo: "Portal de Notícias da Turma",
    descricao: "Mural online com avisos e novidades do curso.",
    responsavel: "Felipe",
    status: "Planejamento",
    tecnologias: ["React", "React Router", "MongoDB"],
    destaque: false,
  },
  {
    id: 7,
    titulo: "Gerenciador de Tarefas",
    descricao: "Quadro estilo kanban para organizar tarefas da equipe.",
    responsavel: "Gabriela",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Node.js", "MySQL"],
    destaque: true,
  },
];

function App() {
  const total = projetos.length;
  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;
  const emDesenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em desenvolvimento"
  ).length;

  return (
    <main className="painel">
      <h1>Projetos da Turma</h1>

      <Secao titulo="Resumo">
        <Resumo
          total={total}
          concluidos={concluidos}
          emDesenvolvimento={emDesenvolvimento}
        />
      </Secao>

      <Secao titulo="Projetos da turma">
        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <ProjetoCard
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              responsavel={projeto.responsavel}
              status={projeto.status}
              tecnologias={projeto.tecnologias}
              destaque={projeto.destaque}
            />
          ))}
        </div>
      </Secao>
    </main>
  );
}

export default App;
