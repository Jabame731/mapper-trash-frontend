import { Component } from '@angular/core';
import { reports } from 'src/app/models';
import { ReportCardComponent } from 'src/app/modules/components';
import { BadgeScrollWrapperComponent } from 'src/app/modules/components';
import { IonContent } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [BadgeScrollWrapperComponent, ReportCardComponent, IonContent],
})
export class HomeComponent {
  reports = reports;

  toggleActive(val: string) {
    console.log(val);
  }
}
