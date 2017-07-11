import { Routes, RouterModule } from '@angular/router';

import { MostrarComponent } from './components/mostrar/mostrar.component';
import { HelpComponent } from './components/help/help.component';
import { PublicarComponent } from './components/publicar/publicar.component';

const APP_ROUTES: Routes = [
  { path: 'mostrar', component: MostrarComponent },
  { path: 'publicar', component: PublicarComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', pathMatch:'full', redirectTo:'mostrar'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
