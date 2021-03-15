import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoaModel } from '../core/model/PessoaModel';


export class FiltroPessoas {
  nome : string ;
  page = 0 ;
  size = 5 ;
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

  excluir(codigo : number){
    const headers = new HttpHeaders().append('Authorization' ,  'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete ( `${this.url}/${codigo}` , {headers : headers }) ;
  }


  mudarStatus(status : any , codigo : number ){
    const headers = new HttpHeaders()
                    .append('Authorization' ,  'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
                    .append('Content-Type', 'application/json')  ;

    return this.http.put( `${this.url}/${codigo}/ativo` , status , {headers : headers }  ) ;
  }


  listarTodas(){
    const headers = new HttpHeaders()
                    .append('Authorization' ,  'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get( this.url , {headers : headers  }) ;
  }


  adicionar( pessoaModel : PessoaModel){
    const headers = new HttpHeaders()
                    .append('Authorization' ,  'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
                    .append('Content-Type' ,  'application/json');

    return this.http.post<PessoaModel>( this.url , pessoaModel , {headers : headers  }) ;
  }


}
