import { Aluno } from "./aluno.model";

export type CreateProps = {
  nome: string;
  curso: string;
  email: string;
};

export class AlunoService {
  alunos = [
    new Aluno({
      nome: "Stephanie Ribeiro",
      curso: "Sistemas de Informação",
      email: "stephanie@gmail.com",
    }),
    new Aluno({
      nome: "Patrick Adan",
      curso: "Sistemas de Informação",
      email: "patrick.tafa@gmail.com",
    }),
  ];

  getAll() {
    return this.alunos;
  }

  create(props: CreateProps) {
    const aluno = new Aluno(props);
    this.alunos.push(aluno);
    return aluno;
  }

  findAluno(nome: string) {
    console.log(nome);
    const response = this.alunos.find((aluno) =>
      aluno.nome.toLowerCase().includes(nome.toLowerCase())
    );
    console.log(response);
    if (response) return response;

    return null;
  }
}
