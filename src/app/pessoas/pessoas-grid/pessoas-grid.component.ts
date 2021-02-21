import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }


  carregarPessoas(event: LazyLoadEvent) {
      const pagina = event.first / event.rows ;
      this.buttonTrocaNumeroPaginaPessoas.emit(pagina);
  }


}
