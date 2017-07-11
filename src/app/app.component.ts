import { Component, OnInit } from '@angular/core';
import {PublicarComponent } from './components/publicar/publicar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FirebaseService} from './services/firebase.service';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  

  constructor() { }

  ngOnInit() {
  }

}
