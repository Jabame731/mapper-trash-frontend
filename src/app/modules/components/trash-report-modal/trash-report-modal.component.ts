import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonItem,
  ModalController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-trash-report-modal',
  templateUrl: './trash-report-modal.component.html',
  styleUrls: ['./trash-report-modal.component.scss'],
  imports: [FormsModule, IonButton, IonContent, IonItem],
})
export class TrashReportModalComponent {
  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalCtrl.dismiss({ result: 'confirmed' }, 'confirm');
  }
}
