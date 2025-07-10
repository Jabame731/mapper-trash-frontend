import { Component } from '@angular/core';

import {
  BadgeComponent,
  ReportCardComponent,
} from 'src/app/modules/components';
import { BadgeScrollWrapperComponent } from 'src/app/modules/components';
import { IonContent } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    BadgeComponent,
    BadgeScrollWrapperComponent,
    ReportCardComponent,
    IonContent,
  ],
})
export class HomeComponent {
  toggleActive(val: string) {
    console.log(val);
  }
}
