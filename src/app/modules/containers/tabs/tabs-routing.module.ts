import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home/all',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'map',
        loadComponent: () =>
          import('./map/map.component').then((c) => c.MapComponent),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./reports/reports.component').then((c) => c.ReportsComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((c) => c.ProfileComponent),
      },
      {
        path: '',
        redirectTo: 'home/all',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
