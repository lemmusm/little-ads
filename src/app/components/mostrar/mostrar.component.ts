import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
})
export class MostrarComponent implements OnInit {


  constructor(public _dn : FirebaseService) {
      this._dn.cargarDatos()
        .subscribe(()=> {
          console.log("Mensajes cargados en publicacion...");
        });
  }

  ngOnInit() {
  }

}
