import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent implements OnInit {

  @Input() pessoas = [] ;
  @Input() size = null ;
  @Input() totalRegistros = null ;

  @Output()  buttonTrocaNumeroPaginaPessoas = new EventEmitter<Number>();
  @Output()  buttonDeletePessoas = new EventEmitter<any>();
  @Output()  linkMudarStatus = new EventEmitter<any>();



  @ViewChild('TabelaListaPessoas') tabelaListaPessoas ;


  constructor() { }

  ngOnInit(): void {
  }


  carregarPessoas(event: LazyLoadEvent) {
      const pagina = event.first / event.rows ;
      this.buttonTrocaNumeroPaginaPessoas.emit(pagina);
  }


  excluir(pessoa: any ) {
      this.buttonDeletePessoas.emit(pessoa);
  }


  mudarStatus(pessoa : any ) {
      this.linkMudarStatus.emit(pessoa);
  }



}
