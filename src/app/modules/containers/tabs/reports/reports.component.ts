import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonChip,
  IonLabel,
  IonCardHeader,
  IonCardTitle,
  IonProgressBar,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  imports: [
    IonContent,
    IonCard,
    IonCardContent,
    IonChip,
    IonLabel,
    IonProgressBar,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonIcon,
    CommonModule,
  ],
})
export class ReportsComponent implements OnInit {
  ngOnInit() {}

  selectedPeriod: string = 'week';

  metrics = {
    reportsSubmitted: { value: 47, change: '+12%' },
    itemsCleaned: { value: 23, change: '+8%' },
    ecoPoints: { value: 156, change: 'Impact' },
    ranking: { value: '#12', change: 'Rank' },
  };

  trashTypes = [
    { type: 'Plastic', icon: '🥤', count: 18, percentage: 38, color: 'danger' },
    { type: 'Glass', icon: '🍺', count: 12, percentage: 26, color: 'warning' },
    { type: 'Metal', icon: '🥫', count: 10, percentage: 21, color: 'primary' },
    { type: 'Organic', icon: '🍎', count: 7, percentage: 15, color: 'success' },
  ];

  achievements = [
    {
      title: 'First Reporter',
      description: 'Submitted your first trash report',
      icon: '🏆',
      timeAgo: '2 days ago',
      color: 'warning',
    },
    {
      title: 'Eco Warrior',
      description: 'Cleaned 20+ trash items',
      icon: '🌱',
      timeAgo: '1 week ago',
      color: 'success',
    },
    {
      title: 'Area Explorer',
      description: 'Reported trash in 5+ locations',
      icon: '📍',
      timeAgo: '2 weeks ago',
      color: 'primary',
    },
  ];

  weeklyData = [
    { day: 'Mon', height: 40 },
    { day: 'Tue', height: 70 },
    { day: 'Wed', height: 55 },
    { day: 'Thu', height: 90 },
    { day: 'Fri', height: 65 },
    { day: 'Sat', height: 45 },
    { day: 'Sun', height: 30 },
  ];

  constructor(private toastController: ToastController) {}

  selectPeriod(period: string) {
    this.selectedPeriod = period;

    this.updateDataForPeriod(period);
  }

  private updateDataForPeriod(period: string) {
    switch (period) {
      case 'week':
        this.metrics.reportsSubmitted.value = 47;
        break;
      case 'month':
        this.metrics.reportsSubmitted.value = 156;
        break;
      case 'year':
        this.metrics.reportsSubmitted.value = 1847;
        break;
    }
  }

  async exportCSV() {
    const toast = await this.toastController.create({
      message: 'CSV report downloaded successfully! 📊',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  async emailSummary() {
    const toast = await this.toastController.create({
      message: 'Monthly summary sent to your email! 📧',
      duration: 2000,
      position: 'bottom',
      color: 'primary',
    });
    toast.present();
  }
}
