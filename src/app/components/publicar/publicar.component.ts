import { Component, OnInit } from '@angular/core';
import { MostrarComponent } from '../mostrar/mostrar.component';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  title:string = "";
  subtitle:string = "";
  publication:string = "";
  author:string = "";

  constructor(public _dn : FirebaseService) {
      this._dn.cargarDatos()
        .subscribe(()=> {
          console.log("Mensajes cargados en registro...");
        });
  }
  
  enviar(){
    this._dn.agregarDatos(this.title, this.subtitle, this.publication, this.author)
    .then(()=> console.log("Guardado en firebase"))
    .catch((error)=>console.error(error))
  }

  ngOnInit() {
  }


}
