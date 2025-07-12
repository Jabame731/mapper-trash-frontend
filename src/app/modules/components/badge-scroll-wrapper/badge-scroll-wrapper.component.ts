import { Component, EventEmitter, input, Output } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { badgeOpts } from 'src/app/models';

@Component({
  selector: 'app-badge-scroll-wrapper',
  templateUrl: './badge-scroll-wrapper.component.html',
  styleUrls: ['./badge-scroll-wrapper.component.scss'],
  imports: [BadgeComponent],
})
export class BadgeScrollWrapperComponent {
  constructor() {}

  isActive = input<boolean>();
  isFixed = input<boolean>();
  @Output() toggleActive: EventEmitter<string> = new EventEmitter<string>();

  badge = badgeOpts;

  handleToggleActive(val: string) {
    this.toggleActive.emit(val);
  }
}
