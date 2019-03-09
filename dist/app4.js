"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var PessoaDao_1 = require("./PessoaDao");
var Pessoa_1 = __importDefault(require("./Pessoa"));
var MotoDao_1 = require("./MotoDao");
var Moto_1 = __importDefault(require("./Moto"));
var dao = new ConcessionariaDao_1.ConcessionariaDao();
var concessionaria = new Concessionaria_1.default('', []);
dao.inserir(concessionaria);
var dao2 = new PessoaDao_1.PessoaDao();
var pessoa = new Pessoa_1.default('', '');
dao2.atualizar(pessoa);
var dao3 = new MotoDao_1.MotoDao();
var moto = new Moto_1.default();
dao3.atualizar(moto);