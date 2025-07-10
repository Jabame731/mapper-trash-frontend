import { Component, input } from '@angular/core';
import {
  IonCard,
  IonItem,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonBadge,
  IonChip,
  IonCardContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locationOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
  imports: [
    IonCard,
    IonItem,
    IonIcon,
    IonLabel,
    IonChip,
    IonCardContent,
    IonAvatar,
  ],
})
export class ReportCardComponent {
  title = input<string>();
  location = input<string>();
  distance = input<string>();
  time = input<string>();
  icon = input<string>();
  priority = input<string>();

  getBageColor(val?: string): string {
    switch (val) {
      case 'High':
        return 'danger';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'success';
      default:
        return 'medium';
    }
  }
}
