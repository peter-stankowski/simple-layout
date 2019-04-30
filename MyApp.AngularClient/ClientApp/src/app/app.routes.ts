import { Routes, Route } from "@angular/router";

import { HomeComponent } from './home/home.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { displayText: 'Home' } },
  { path: 'about', component: HomeComponent, data: { displayText: 'About' } },
  { path: 'contact', component: HomeComponent, data: { displayText: 'Contact' } }
];
