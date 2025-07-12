import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  IonCard,
  IonIcon,
  IonButton,
  IonChip,
  IonCardContent,
} from '@ionic/angular/standalone';
import { reports } from 'src/app/models';
@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
  imports: [IonCard, IonIcon, IonChip, IonCardContent, IonButton, CommonModule],
})
export class ReportCardComponent {
  title = input<string>();
  status = input<string>('');
  location = input<string>();
  reportedDate = input<Date>(new Date());
  description = input<string>();
  priority = input<string>('');

  reports = reports;

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

  getStatusColor(status: string): string {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'in-progress':
        return 'primary';
      case 'resolved':
        return 'success';
      case 'verified':
        return 'tertiary';
      default:
        return 'medium';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'in-progress':
        return 'In Progress';
      case 'resolved':
        return 'Resolved';
      case 'verified':
        return 'Verified';
      default:
        return 'Unknown';
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'low':
        return 'success';
      case 'medium':
        return 'warning';
      case 'high':
        return 'danger';
      case 'urgent':
        return 'danger';
      default:
        return 'medium';
    }
  }

  getPriorityLabel(priority: string): string {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  }

  getTimeAgo(date: Date): string {
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;

    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}w ago`;
  }
}
