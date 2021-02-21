import { FiltroPessoas, PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {


  filtro = new FiltroPessoas() ;

  pessoas = [  ];
  totalRegistros = 0 ;


  constructor(private pessoaService : PessoaService) { }

  ngOnInit(): void {

  }

  pesquisar(pagina = 0 ){

    this.filtro.page = pagina ;

    this.pessoaService.pesquisar(this.filtro)
          .subscribe( (pessoas) => {

            this.pessoas = pessoas["content"] ;
            this.totalRegistros = pessoas["totalElements"] ;

          })  ;
  }


}
