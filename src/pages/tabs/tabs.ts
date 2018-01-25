import { Component } from '@angular/core';

import { PendientesComponent } from '../pendiente/pendientes.component';
import { TerminadosComponent } from '../terminado/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;

  constructor() {

  }
}
