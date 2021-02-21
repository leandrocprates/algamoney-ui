import { Component, OnInit, ViewChild } from '@angular/core';

import { MessageService } from 'primeng/api';

import { LancamentosGridComponent } from './../lancamentos-grid/lancamentos-grid.component';
import { LancamentoService, FilterPesquisa } from './../lancamento.service';
import { ErrorHandlerService } from './../../core/error-handler.service';


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [ ];
  filtro = new  FilterPesquisa() ;
  totalRegistros : Number  ;

  @ViewChild(LancamentosGridComponent) lancamentosGridComponent ;

  constructor(private lancamentoService: LancamentoService,
              private messageService : MessageService,
              private errorHandlerService : ErrorHandlerService
              ){} ;

  ngOnInit(): void {

  }

  pesquisar(pagina = 0 ){
        this.filtro.page = pagina ;
        console.log( this.filtro ) ;

        this.lancamentoService.pesquisar(this.filtro )
        .subscribe(
                    (dados) => {
                          this.lancamentos =  dados['content'] ;
                          this.totalRegistros = dados['totalElements'] ;
                    },
                    (error) => {
                      this.errorHandlerService.handle(error);
                    }

        );

  }

  excluir( lancamento : any ) {
    console.log(lancamento) ;
    this.lancamentoService.excluir(lancamento.codigo)
      .subscribe(
                () => {
                      this.messageService.add({severity:'success', summary:'Lancamento Excluido',
                      detail: `O lancamento de codigo ${lancamento.codigo} foi excluido com sucesso.`});
                      this.lancamentosGridComponent.tabelaLancamentos.clear();// reset tabela em lancamento-grid
                },
                (error)=>{
                  this.errorHandlerService.handle(error);
                }
      ) ;

  }


}
