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
import { addIcons } from 'ionicons';
import {
  homeOutline,
  mapOutline,
  copyOutline,
  personOutline,
} from 'ionicons/icons';
import { RouterLinkWithHref } from '@angular/router';
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
    RouterLinkWithHref,
    IonHeader,
    HeaderComponent,
    IonContent,
    IonRouterOutlet,
  ],
})
export class TabsComponent implements OnInit {
  constructor() {
    addIcons({
      homeOutline,
      mapOutline,
      copyOutline,
      personOutline,
    });
  }

  ngOnInit() {}
}
