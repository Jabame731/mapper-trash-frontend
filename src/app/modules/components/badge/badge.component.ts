import { Component, EventEmitter, input, Output } from '@angular/core';
import { IonChip, IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  imports: [IonChip, IonIcon, IonButton],
})
export class BadgeComponent {
  badgeText = input.required<string>();
  icon = input<string>();
  isActive = input<boolean>();
  isFixed = input<boolean>();

  @Output() handleToggleActive: EventEmitter<string> =
    new EventEmitter<string>();

  toggleActive(val: string) {
    this.handleToggleActive.emit(val);
  }
}
