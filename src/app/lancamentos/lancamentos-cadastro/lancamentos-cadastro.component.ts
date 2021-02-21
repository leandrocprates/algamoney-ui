import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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


  categorias = [
    { label:'Alimentação' , value:1 } ,
    { label:'Transporte'  , value:2 } ,
  ] ;


  pessoas = [
    { label: 'Joao da Silva' , value : 4 } ,
    { label: 'Sebastiao Souza' , value : 5 } ,
    { label: 'Maria Abadia' , value : 6 }
  ];




  constructor() { }

  ngOnInit(): void {
  }


  salvar(formCadastroLancamento : NgForm ): void {
    console.log(formCadastroLancamento);
  }



}
