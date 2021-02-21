import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RippleModule } from 'primeng/ripple';
import { HttpClientModule } from '@angular/common/http' ;

import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog' ;

import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentoService } from './lancamentos/lancamento.service';
import { PessoaService } from './pessoas/pessoa.service';


import { registerLocaleData } from '@angular/common';
import  localePt  from '@angular/common/locales/pt' ;

import { AppComponent } from './app.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RippleModule,
    AppRoutingModule,
    HttpClientModule,

    ToastModule,
    ConfirmDialogModule,

    CoreModule,
    LancamentosModule,
    PessoasModule
  ],
  providers: [
        LancamentoService, PessoaService, MessageService, ConfirmationService,
        {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
