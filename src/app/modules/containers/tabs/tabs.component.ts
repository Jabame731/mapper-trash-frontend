import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonHeader,
  IonContent,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonHeader,
    HeaderComponent,
    IonContent,
    IonRouterOutlet,
  ],
})
export class TabsComponent {}
