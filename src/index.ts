import * as soap from "soap";
import express from "express";
import bodyParser from "body-parser";
import { AlunoService, CreateProps } from "./aluno.service";
import { readFileSync } from "fs";
import path from "path";

const alunoService = new AlunoService();

type ArgsProps = {
  nome: string;
};

const service = {
  wsservice: {
    wsservicePort: {
      alunos: () => {
        return alunoService.getAll();
      },
      aluno: ({ nome }: ArgsProps) => {
        return alunoService.findAluno(nome);
      },
      create: (args: CreateProps) => {
        return alunoService.create(args);
      },
    },
  },
};

const xml = readFileSync(path.join(__dirname, "aluno.wsdl"), "utf8");

const server = express();

server.use(
  bodyParser.raw({
    type: function () {
      return true;
    },
    limit: "5mb",
  })
);

server.listen(3333, () => {
  soap.listen(server, "/wsdl", service, xml, () =>
    console.log("server SOAP iniciado na porta 3333")
  );
});
