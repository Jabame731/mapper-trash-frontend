// import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: AppComponent,
//     canActivate: [],
//     children: [
//       {
//         path: '',
//         redirectTo: 'list-screen',
//         pathMatch: 'full',
//       },
//       {
//         path: 'list-screen',
//         loadComponent: async () =>
//           await import(
//             '../app/modules/containers/list-search/list-search.component'
//           ).then((c) => c.ListSearchComponent),
//       },
//     ],
//   },
// ];

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
