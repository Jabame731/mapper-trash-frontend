import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import {
  IonApp,
  IonToggle,
  IonList,
  IonNote,
  IonItem,
  IonText,
  IonIcon,
  IonLabel,
  IonButton,
  IonCardContent,
  IonCard,
  IonContent,
  IonAvatar,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    IonIcon,
    IonLabel,
    IonButton,
    IonCardContent,
    IonCard,
    IonContent,
    IonAvatar,
    IonText,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonNote,
    IonList,
    IonToggle,
    IonApp,
  ],
})
export class ProfileComponent implements OnInit {
  currentUser: any | null = null;

  userStats = {
    totalReports: 47,
    itemsCleaned: 23,
    ecoPoints: 156,
    daysActive: 28,
    rank: 12,
    level: 'Eco Warrior',
  };

  achievements = [
    {
      id: 1,
      name: 'First Reporter',
      icon: '🏆',
      earned: true,
      color: 'warning',
    },
    { id: 2, name: 'Eco Warrior', icon: '🌱', earned: true, color: 'success' },
    {
      id: 3,
      name: 'Area Explorer',
      icon: '📍',
      earned: true,
      color: 'primary',
    },
    { id: 4, name: 'Clean Streak', icon: '🔥', earned: false, color: 'medium' },
    {
      id: 5,
      name: 'Community Hero',
      icon: '⭐',
      earned: false,
      color: 'medium',
    },
    {
      id: 6,
      name: 'Green Guardian',
      icon: '🛡️',
      earned: false,
      color: 'medium',
    },
  ];

  recentActivity = [
    {
      action: 'Reported plastic bottles',
      location: 'Central Park',
      time: '2 hours ago',
      icon: '🥤',
    },
    {
      action: 'Cleaned glass bottles',
      location: 'Beach Area',
      time: '1 day ago',
      icon: '🍺',
    },
    {
      action: 'Reported metal cans',
      location: 'Riverside Trail',
      time: '2 days ago',
      icon: '🥫',
    },
  ];

  settings = [
    { name: 'Notifications', icon: 'notifications-outline', enabled: true },
    { name: 'Location Services', icon: 'location-outline', enabled: true },
    { name: 'Dark Mode', icon: 'moon-outline', enabled: false },
    { name: 'Auto Sync', icon: 'sync-outline', enabled: true },
  ];

  user = {
    name: 'Leroy Jenkins',
    email: 'leroy@admin.com',
  };

  constructor(
    private router: Router,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async presentProfileActions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Profile Options',
      buttons: [
        {
          text: 'Edit Profile',
          icon: 'create-outline',
          handler: () => {
            this.editProfile();
          },
        },
        {
          text: 'Change Avatar',
          icon: 'camera-outline',
          handler: () => {
            this.changeAvatar();
          },
        },
        {
          text: 'Share Profile',
          icon: 'share-outline',
          handler: () => {
            this.shareProfile();
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async editProfile() {
    const alert = await this.alertController.create({
      header: 'Edit Profile',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Full Name',
          value: this.currentUser?.name,
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          value: this.currentUser?.email,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Save',
          handler: (data: any) => {
            this.saveProfile(data);
          },
        },
      ],
    });
    await alert.present();
  }

  async saveProfile(data: any) {
    const toast = await this.toastController.create({
      message: 'Profile updated successfully! ✅',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  async changeAvatar() {
    const toast = await this.toastController.create({
      message: 'Avatar changed! 📸',
      duration: 2000,
      position: 'bottom',
      color: 'primary',
    });
    toast.present();
  }

  async shareProfile() {
    const toast = await this.toastController.create({
      message: 'Profile shared! 🔗',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  toggleSetting(setting: any) {
    setting.enabled = !setting.enabled;
  }

  async showHelp() {
    const alert = await this.alertController.create({
      header: 'Help & Support',
      message:
        'Need help? Contact us at support@ecotracker.com or visit our FAQ section.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Logout',
          handler: () => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });
    await alert.present();
  }

  getLevelProgress(): number {
    return (this.userStats.ecoPoints % 50) / 50;
  }

  getNextLevelPoints(): number {
    return 50 - (this.userStats.ecoPoints % 50);
  }
}
