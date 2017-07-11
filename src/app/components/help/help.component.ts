import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(public _dh : FirebaseService) {
      this._dh.cargaAyuda()
        .subscribe(()=> {
          console.log("Datos cargados en ayuda...");
        });
  }
  ngOnInit() {
  }
  

}