
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    },
    { path: 'intro', component: IntroComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);