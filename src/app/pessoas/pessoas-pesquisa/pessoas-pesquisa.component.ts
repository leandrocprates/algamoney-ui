import { PessoasGridComponent } from './../pessoas-grid/pessoas-grid.component';
import { MessageService } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { FiltroPessoas, PessoaService } from './../pessoa.service';


@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {


  filtro = new FiltroPessoas() ;

  pessoas = [  ];
  totalRegistros = 0 ;

@ViewChild(PessoasGridComponent) pessoasGridComponent ;


  constructor(
              private pessoaService : PessoaService,
              private messageService : MessageService,
              private errorHandlerService : ErrorHandlerService
              ) { }


  ngOnInit(): void {

  }

  pesquisar(pagina = 0 ){

    this.filtro.page = pagina ;

    this.pessoaService.pesquisar(this.filtro)
          .subscribe( (pessoas) => {

            this.pessoas = pessoas["content"] ;
            this.totalRegistros = pessoas["totalElements"] ;

          })  ;
  }

  excluir(pessoa : any ){

    console.log(pessoa);
    this.pessoaService.excluir(pessoa.codigo)
      .subscribe(
        () => {
          this.messageService.add({severity:'success', summary: 'Registrio Excluido',
            detail:`Pessoa :${pessoa.nome}, codigo: ${pessoa.codigo} deletado com sucesso `});
            this.pessoasGridComponent.tabelaListaPessoas.clear();

        },
        (error) => {
          this.errorHandlerService.handle(error) ;
        }
      );

  }


  mudarStatus(pessoa : any) {

    console.log(pessoa);

    let statusEnviado : boolean = !pessoa.ativo ;

    this.pessoaService.mudarStatus(statusEnviado , pessoa.codigo)
      .subscribe(
            () => {
                this.messageService.add({severity:'success', summary: 'Status Alterado',
                    detail:`Status de ${pessoa.nome} alterado com sucesso `});
                this.pessoasGridComponent.tabelaListaPessoas.clear();
            },
            (error) => {
                this.errorHandlerService.handle(error) ;
            }
      );


  }



}
