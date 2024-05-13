import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component'),
    children: [
      {
        path: '',
        redirectTo: 'services',
        pathMatch: 'full',
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/portfolio/pages/services/services.component'),
        data: {
          icon: 'badge',
          title: 'Services',
        },
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/portfolio/pages/projects/projects.component'),
        data: {
          icon: 'laptop_mac',
          title: 'Projects',
        },
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/portfolio/pages/about/about.component'),
        data: {
          icon: 'person',
          title: 'About me',
        },
      },
    ],
  },
  {
    path: 'ia',
    loadComponent: () => import('./pages/ia/ia.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/ia/all-chats/all-chats.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
];
