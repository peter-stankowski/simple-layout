import { Routes, Route } from "@angular/router";

import { HomeComponent } from './home/home.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      displayText: 'Home'
    }
  },
  {
    path: 'about',
    component: HomeComponent,
    data: {
      displayText: 'About'
    }
  },
  {
    path: 'contact',
    component: HomeComponent,
    data: {
      displayText: 'Contact'
    }
  },
  {
    path: 'settings',
    component: HomeComponent,
    data: {
      displayText: 'Settings'
    },
    children: [
      {
        path: 'user',
        component: HomeComponent,
        data: {
          displayText: 'User Settings'
        }
      },
      {
        path: 'customer',
        component: HomeComponent,
        data: {
          displayText: 'Customer Settings'
        },
        children: [
          {
            path: 'public',
            component: HomeComponent,
            data: {
              displayText: 'Public Customer Settings'
            }
          },
          {
            path: 'private',
            component: HomeComponent,
            data: {
              displayText: 'Private Customer Settings'
            }
          }
        ]
      }
    ]
  },
];
