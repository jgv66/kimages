import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  data: any;

  public codigo = '';   /* CORAEDU001 */
  name        = '';
  description = '';  ficha = '';
  edad        = '';
  brand       = '';
  size        = '';
  image       = '';
  sinimagen   = 'assets/img/no-img.png';

  NoExiste = { code: '',
               name: 'codigo no existe',
               description: 'codigo no existe',
               images: [ { original: '' }],
               presentation: '',
               size: '',
               age: '',
               brand: '',
            };

  constructor( private hServe: HeroesService ) {}

  ngOnInit() {
    this.codigo = '';
    this.name   = '';
    this.ficha  = '';
    this.edad   = '';
    this.brand  = '';
    this.size   = '';
    this.image  = '';
  }

  cargaData() {
    this.codigo = this.data.code;
    this.name   = this.data.name;
    this.ficha  = this.data.description;
    this.edad   = this.data.age;
    this.brand  = this.data.brand;
    this.size   = this.data.size;
    this.image  = this.data.images;
    // listo el foco  /* CORAEDU001 */
  }

  buscarCodigo() {
    const textoBuscar = this.codigo.toUpperCase();
    console.log( this.codigo );
    this.hServe.irPorCodigo( textoBuscar )
        .subscribe( (item: any) => { console.log(item);
                                     item.images = item.images[0].original;
                                     this.data = item;
                                     this.cargaData(); },
                          (err) => { this.data = this.NoExiste;
                                     this.data.name = 'codigo no existe ==>> ' + textoBuscar ;
                                     this.cargaData(); } );
  }

  scanCodigo() {

  }

}

