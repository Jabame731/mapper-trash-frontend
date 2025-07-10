import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./modules/containers/tabs/').then((m) => m.TabsPageModule),
  },
  {
    path: '**',
    redirectTo: 'tabs',
  },
];
