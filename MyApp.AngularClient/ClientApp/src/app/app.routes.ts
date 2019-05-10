import { Routes, Route } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';

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
  {
    path: 'forms',
    component: FormsComponent,
    data: {
      displayText: 'Forms'
    }
  }
];

//no longer used, driven by API
export const appNav: any = [
  {
    path: '',
    displayText: 'Home',
    displayIcon: 'home'
  },
  {
    path: 'about',
    displayText: 'About'
  },
  {
    path: 'contact',
    displayText: 'Contact'
  },
  {
    path: 'settings',
    displayText: 'Settings',
    children: [
      {
        path: 'user',
        displayText: 'User Settings'
      },
      {
        path: 'customer',
        displayText: 'Customer Settings',
        displayIcon: 'settings',
        children: [
          {
            path: 'public',
            displayText: 'Public Customer Settings'
          },
          {
            path: 'private',
            displayText: 'Private Customer Settings'
          }
        ]
      }
    ]
  },
];

