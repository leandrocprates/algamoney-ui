import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { throwError } from 'rxjs';
import { catchError } from  "rxjs/operators";

export class FilterPesquisa {
  descricao: string ;
  dataVencimentoInicio : Date ;
  dataVencimentoFim : Date ;
  page = 0 ;
  size = 5 ;
}



@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoURL = 'http://localhost:8080/lancamentos' ;

  constructor(private http: HttpClient ) { }


  pesquisar(filtro : FilterPesquisa ) {

    let params = new HttpParams();

    params = params.set('page' , filtro.page.toString() ) ;
    params = params.set('size' , filtro.size.toString() ) ;

    if ( filtro.descricao ) {
        params = params.set('descricao' , filtro.descricao ) ;
    }

    if ( filtro.dataVencimentoInicio){
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD') )  ;
    }

    if ( filtro.dataVencimentoFim){
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD') ) ;
    }

    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.lancamentoURL}?resumo`, { headers, params }) ;
  }

  excluir( codigo : number ){
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(`${this.lancamentoURL}/${codigo}`, { headers : headers })
          .pipe(
              catchError((erro) => {
                  console.log('Service: ' + erro.message);
                  return throwError(erro) ;
              })
          )
    ;
  }


}
