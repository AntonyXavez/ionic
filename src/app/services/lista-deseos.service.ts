import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';
import { ListaItem } from '../clases/lista-item';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = []

  constructor() {

      // let lista1 = new Lista('Compras de SuperMercados');
      // let lista2 = new Lista('Juegos que deseo');
      // let lista3 = new Lista('Cosas de la Universidad');
      //
      // this.listas.push( lista1 );
      // this.listas.push( lista2 );
      // this.listas.push( lista3 );
      this.cargarData();
      console.log("Servicio Iniciallizado!!!")
  }

  actualizarData(){

    localStorage.setItem( 'lista', JSON.stringify( this.listas ) );

  }

  cargarData(){

    if ( localStorage.getItem('lista') ) {

      this.listas = JSON.parse( localStorage.getItem( 'lista' ) );
    }
  }


  agregarLista( lista:Lista ){

      console.log(JSON.stringify(lista));

      this.listas.push( lista );

      this.actualizarData();

  }

  eliminarLista( idx: number ){
    this.listas.splice( idx, 1);

    this.actualizarData();
  }

}
