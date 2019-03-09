import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'

import { PessoaDao } from './PessoaDao'
import Pessoa from './Pessoa'

import { MotoDao } from './MotoDao'
import Moto from './Moto'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);

let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '');

dao2.atualizar(pessoa);

let dao3: MotoDao = new MotoDao()
let moto: Moto = new Moto();

dao3.atualizar(moto);