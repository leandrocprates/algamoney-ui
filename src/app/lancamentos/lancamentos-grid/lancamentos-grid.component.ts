import { Component, OnInit, Input, Output , EventEmitter, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent implements OnInit {

  @Input() lancamentos = [] ;
  @Input() numeroLinhas= 2 ;
  @Input() totalRegistros = 0 ;

  @Output()  buttonTrocaNumeroPagina = new EventEmitter<Number>();
  @Output()  buttonDeletaRegistroLancamento = new EventEmitter<any>();

  @ViewChild('tabelaLancamentos') tabelaLancamentos ;


  constructor(private confirmationService: ConfirmationService , private messageService : MessageService) { }

  ngOnInit(): void {
  }

  loadLancamentos(event: LazyLoadEvent) {
        const pagina = event.first / event.rows ;
        this.buttonTrocaNumeroPagina.emit(pagina) ;
  }

  confirmarExclusao(lancamento : any){

        this.confirmationService.confirm({
              header: 'Confirmação de Exclusão',
              message:'Tem certeza que deseja excluir o lancamento' ,
              icon: 'pi pi-info-circle',
              acceptLabel: 'Sim',
              rejectLabel: 'Não',
              accept: ()=>{
                  this.excluir(lancamento) ;
              },
              reject: () =>{
                  this.messageService.add({severity:'warn', summary:'Cancelado', detail:'Cancelado a Exclusão'});
              }
        });

  }

  excluir(lancamento : any){
        console.log( `grid ${lancamento.codigo} ` );
        this.buttonDeletaRegistroLancamento.emit(lancamento);
  }


}
