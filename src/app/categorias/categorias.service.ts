import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriaUrl = "http://localhost:8080/categorias" ;

  constructor(private httpClient : HttpClient ) { }


  listarTodas(){

    const headers = new HttpHeaders()
                    .append('Authorization' ,  'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==') ;
    return this.httpClient.get(this.categoriaUrl , { headers : headers } ) ;
  }


}

