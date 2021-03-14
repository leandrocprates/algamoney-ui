import { PessoaModel } from './PessoaModel';
import { CategoriaModel } from './CategoriaModel';

export class LancamentoModel {
  codigo : number ;
  descricao: string ;
  dataVencimento: Date ;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  tipo: string ;
  categoria = new CategoriaModel();
  pessoa = new PessoaModel() ;
}


