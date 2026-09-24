import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'About Us · Charcha Live',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'team',
    title: 'Our Team · Charcha Live',
    loadComponent: () => import('./pages/team/team').then((m) => m.Team),
  },
  {
    path: 'contact',
    title: 'Contact · Charcha Live',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
