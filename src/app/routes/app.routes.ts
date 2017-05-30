import { Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home/home.component';


// Route Configuration
export const routes: Routes = [
    {
        path: '',
        canActivateChild: [MetaGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
                data: {
                    meta: {
                        title: 'AtomicAppSeed',
                        description: 'Some dynamic tags.'
                    }
                }
            },
        ]
    }
];