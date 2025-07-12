import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonImg,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonImg, IonButton, IonIcon],
})
export class HeaderComponent implements OnInit {
  ngOnInit() {}
}
