import { randomUUID } from "crypto";

type AlunoProps = {
  nome: string;
  curso: string;
  email: string;
};

export class Aluno {
  id: string;
  nome: string;
  curso: string;
  email: string;

  constructor({ nome, curso, email }: AlunoProps) {
    this.id = randomUUID();
    this.nome = nome;
    this.curso = curso;
    this.email = email;
  }
}
