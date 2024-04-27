import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component'),
    children: [
      {
        path: 'works',
        loadComponent: () => import('./pages/portfolio/pages/works/works.component'),
        data: {
          icon: 'fa-solid fa-spell-check',
          title: 'Ortografía',
          description: 'Corregir ortografía',
        },
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
];
