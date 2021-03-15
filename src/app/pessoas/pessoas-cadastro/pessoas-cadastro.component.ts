import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaModel } from 'src/app/core/model/PessoaModel';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  pessoaModel = new PessoaModel() ;


  constructor(
              private pessoaService : PessoaService,
              private errorHandlerService : ErrorHandlerService,
              private messageService : MessageService
              ) { }


  ngOnInit(): void {
  }



  salvar(formCadastroPessoas: NgForm): void {
    console.log(this.pessoaModel);
    this.pessoaService.adicionar(this.pessoaModel)
      .subscribe(
            (pessoa)=> {
                this.messageService.add({severity:'success', summary:'Pessoa Cadastrada',
                detail: `A Pessoa de codigo ${pessoa.codigo} foi criada com sucesso.`});
                formCadastroPessoas.reset();
                this.pessoaModel = new PessoaModel() ;
            } ,
            (error)=>{
                this.errorHandlerService.handle(error);
            }
      );

  }


}
