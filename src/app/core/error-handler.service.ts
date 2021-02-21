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
    } else {
      msg = `Backend returned code ${errorResponse.status},  body was: ${errorResponse.message}` ;
    }

    this.messageService.add({severity:'error', summary: 'Error', detail: msg });
  }

}
