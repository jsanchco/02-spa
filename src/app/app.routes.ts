import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: Component },
    {path: '**', pathMatch: 'full, ' redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);