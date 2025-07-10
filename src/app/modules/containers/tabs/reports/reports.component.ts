import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { badgeOpts } from 'src/app/models';
import { BadgeComponent } from 'src/app/modules/components';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  imports: [IonContent, BadgeComponent, IonicModule],
})
export class ReportsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
