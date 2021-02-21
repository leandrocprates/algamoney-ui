import { PessoaService } from './../../pessoas/pessoa.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriasService } from './../../categorias/categorias.service';


@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.css']
})
export class LancamentosCadastroComponent implements OnInit {


  tipos = [
    { label:'Receita' , value : 'RECEITA'},
    { label:'Despesa' , value : 'DESPESA'}
  ];


  categorias = [] ;
  pessoas = [];
  categoriaSelecionada = null;
  pessoaSelecionada = null;


  constructor(private categoriasService : CategoriasService,
              private pessoaService : PessoaService,
              private errorHandlerService : ErrorHandlerService

    ) { }

  ngOnInit(): void {
      this.carregarCategorias();
      this.carregarPessoas();
  }


  salvar(formCadastroLancamento : NgForm ): void {
    console.log(formCadastroLancamento);
    console.log(this.categoriaSelecionada) ;
    console.log(this.pessoaSelecionada) ;
  }

  carregarCategorias(){
          this.categoriasService.listarTodas()
          .subscribe(
                (categoriasArray : any[] )=> {
                    this.categorias =  categoriasArray ;
                },
                (error) => {
                    this.errorHandlerService.handle(error) ;
                }
          );

  }

  carregarPessoas(){
          this.pessoaService.listarTodas()
          .subscribe(
              (pessoasArray: any[]) => {
                    this.pessoas = pessoasArray["content"] ;
              } ,
              (error)=>{
                this.errorHandlerService.handle(error) ;
              }
          )
  }



}
