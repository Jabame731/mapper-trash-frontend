import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsPageRoutingModule } from './tabs-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, TabsPageRoutingModule, TabsComponent],
})
export class TabsPageModule {}
