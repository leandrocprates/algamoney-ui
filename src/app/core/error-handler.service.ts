import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService : MessageService) { }

  handle(errorResponse : any ){

    let msg : string ;

    console.error(errorResponse);

    if ( errorResponse.error instanceof ErrorEvent) {
      msg = errorResponse.error.message ;
    } else if ( errorResponse instanceof HttpErrorResponse
        && errorResponse.status >=400 &&  errorResponse.status <=499 ) {

          const message = errorResponse.message ;
          const status = errorResponse.status ;

          try{
            const mensagemUsuario = errorResponse.error[0].mensagemUsuario ;
            msg = mensagemUsuario ;
          }catch(Exception){}

    } else {
      msg = `Backend returned code ${errorResponse.status},  body was: ${errorResponse.message}` ;
    }

    this.messageService.add({severity:'error', summary: 'Erro', detail: msg });
  }

}
