import { createClient } from "soap";
import { argv } from "process";

const url = "http://localhost:3333/wsdl?wsdl";
const command = argv[2];
const args = { nome: argv[3] };

const aluno = {
  nome: argv[3],
  curso: argv[4],
  email: argv[5],
};

createClient(url, (err, client) => {
  if (err) {
    console.log(err);
    return;
  }
  if (command === "all") {
    client.alunos(args, (err: any, result: any) => {
      console.log(result);
    });
  }
  if (command === "find") {
    client.aluno(args, (err: any, result: any) => {
      console.log(result);
    });
  }
  if (command === "create") {
    client.create(aluno, (err: any, result: any) => {
      console.log(result);
    });
  }
});
