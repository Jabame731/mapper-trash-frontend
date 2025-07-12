import { Component, inject } from '@angular/core';

import { IonContent } from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { ModalController } from '@ionic/angular';
import { TrashReportModalComponent } from 'src/app/modules/components/trash-report-modal/trash-report-modal.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  imports: [IonContent],
})
export class MapComponent {
  constructor() {}

  private modalController = inject(ModalController);

  ionViewDidEnter() {
    this.initMap();
  }

  map!: L.Map;
  trucks: any[] = [];

  trashPins: any[] = [];
  currentLocation!: L.Marker;

  initMap() {
    this.map = L.map('mapId').setView([10.1478, 124.1428], 14);

    console.log(this.map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );

    this.map.on('click', (e: any) => {
      const { lat, lng } = e.latlng;
      // this.addTrash(lat, lng);
    });

    this.addCityMarkers();
  }

  trashIcon() {
    return L.icon({
      iconUrl: 'assets/icon/pin.png',
      iconSize: [30, 30],
    });
  }

  addCityMarkers() {
    const cities = [
      {
        name: 'Salog Getafe',
        lat: 10.139416,
        lng: 124.160123,
      },
      {
        name: 'Saguise Getafe',
        lat: 10.140120467160415,
        lng: 124.15329179181217,
      },
    ];

    cities.forEach((city) => {
      const marker = L.marker([city.lat, city.lng])
        .addTo(this.map)
        .bindPopup(city.name)
        .on('click', () => this.openReportModal(city.name));
    });
  }

  addTrash(lat: number, lng: number) {
    const marker = L.marker([lat, lng], {
      icon: this.trashIcon(),
    }).addTo(this.map);
    this.trashPins.push(marker);
  }

  async openReportModal(cityName: string) {
    const modal = await this.modalController.create({
      component: TrashReportModalComponent,
      componentProps: { city: cityName },
      cssClass: 'half-modal',
    });
    return await modal.present();
  }
}
