import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonFooter,
  IonContent,
  IonHeader,
} from '@ionic/angular/standalone';
import { HeaderComponent } from './modules/components';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    HeaderComponent,

    IonFooter,
    IonContent,
    IonHeader,
  ],
})
export class AppComponent {
  constructor() {}
}
