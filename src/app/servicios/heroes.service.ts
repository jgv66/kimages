
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroesService {

    url = 'https://prod.kinetik.cl/jmimport/api/product/';

    constructor( private http: HttpClient ) {
        console.log('servicio listo para usar !!');
    }

    irPorCodigo( codigo ) {
       return this.http.get( this.url + codigo.trim() + '?code=1' );
    }


}