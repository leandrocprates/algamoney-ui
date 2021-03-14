import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { PessoaService } from './../../pessoas/pessoa.service';
import { LancamentoService } from './../lancamento.service';

import { LancamentoModel } from './../../core/model/LancamentoModel';

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
  lancamentoModel = new LancamentoModel();


  constructor(private categoriasService : CategoriasService,
              private pessoaService : PessoaService,
              private lancamentoService : LancamentoService,
              private messageService : MessageService,
              private errorHandlerService : ErrorHandlerService,

    ) { }

  ngOnInit(): void {
      this.carregarCategorias();
      this.carregarPessoas();
  }


  salvar(formCadastroLancamento : NgForm ): void {

    console.log(this.lancamentoModel);
    this.lancamentoService.salvar(this.lancamentoModel)
        .subscribe(lancamento => {
              this.messageService.add({severity:'success', summary:'Lancamento Criado',
              detail: `O lancamento de codigo ${lancamento.codigo} foi criado com sucesso.`});
              formCadastroLancamento.reset();
              this.lancamentoModel = new LancamentoModel();

            },(error)=> {
                this.errorHandlerService.handle(error);
            }
        );

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
