import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LISTIN } from '../../data/data.listin';
import { Listin } from '../../interfaces/listin.interface';
/*
Generated class for the LlamadasProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class LlamadasProvider {
    listin:Listin[] = [];

    constructor() {
        this.listin = LISTIN.splice(0); //de esta manera hace una copia del array y no una referencia
    }

}
