import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Rutas
import {APP_ROUTING} from './app.route';

//Services
import  {FirebaseService} from './services/firebase.service';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
//Components
import { AppComponent } from './app.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HelpComponent } from './components/help/help.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    NavbarComponent,
    HelpComponent,
    PublicarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
