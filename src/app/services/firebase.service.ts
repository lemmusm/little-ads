import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Datos} from '../interfaces/data.interface';

@Injectable()
export class FirebaseService {

  datosPublication: FirebaseListObservable<any[]>;
  datosAyuda: FirebaseListObservable<any[]>;

  constructor(private af : AngularFireDatabase) {
   }

   cargarDatos(){
     this.datosPublication = this.af.list('news');
     return this.datosPublication;
   }

   cargaAyuda(){
     this.datosAyuda = this.af.list('datospersonales');
     return this.datosAyuda;
   }

   agregarDatos(title:string, subtitle:string, publication:string, author:string){
     /*this.datospersonales = this.db.object('/datospersonales');
     return this.datospersonales.subscribe(console.log); */    
     let dato:Datos = {
        title:title,
        subtitle:subtitle,
        publication: publication,
        author:author
     }
     return this.datosPublication.update('1',dato);
   }

}
