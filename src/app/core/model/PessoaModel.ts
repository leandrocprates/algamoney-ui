import { EnderecoModel } from "./EnderecoModel";
export class PessoaModel {
  codigo : number ;
  nome: string;
  endereco  = new  EnderecoModel();
  ativo: boolean = true ;
}
