import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  mapOutline,
  copyOutline,
  personOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, IonLabel],
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
