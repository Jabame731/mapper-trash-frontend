import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonImg,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline, search } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonImg, IonButton, IonIcon],
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({
      notificationsOutline,
      search,
    });
  }

  ngOnInit() {}
}
