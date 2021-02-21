import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';


@NgModule({
  declarations: [
    PessoasCadastroComponent,
    PessoasGridComponent,
    PessoasPesquisaComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    SharedModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    InputNumberModule,
    InputMaskModule

  ],
  exports:[
    PessoasCadastroComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
