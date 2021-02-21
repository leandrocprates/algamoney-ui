import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class FiltroPessoas {
  nome : string ;
  page = 0 ;
  size = 3 ;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = "http://localhost:8080/pessoas" ;

  constructor(private http : HttpClient) { }


  pesquisar(filtro : FiltroPessoas){

    let params = new HttpParams() ;
    params = params.set('page' , filtro.page.toString()) ;
    params = params.set('size' , filtro.size.toString()) ;

    if (filtro.nome){
      params = params.set('nome' , filtro.nome ) ;
    }

    const headers = new HttpHeaders().append('Authorization' ,  'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get( this.url , {headers : headers , params: params }) ;

  }


}
