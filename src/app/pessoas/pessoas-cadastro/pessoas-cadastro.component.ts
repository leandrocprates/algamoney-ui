import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  salvar(formCadastroPessoas: NgForm): void {
    console.log(formCadastroPessoas);
  }


}
