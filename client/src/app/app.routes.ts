import { Routes } from '@angular/router';
import { title } from 'process';

export const routes: Routes = [
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component'),
    children: [
      {
        path: 'services',
        loadComponent: () => import('./pages/portfolio/pages/projects/projects.component'),
        data: {
          icon: 'web_fill',
          title: 'Services',
        },
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/portfolio/pages/projects/projects.component'),
        data: {
          icon: 'laptop_fill',
          title: 'Projects',
        },
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/portfolio/pages/projects/projects.component'),
        data: {
          icon: 'user_2_fill',
          title: 'About me',
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
