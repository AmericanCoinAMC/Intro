import { Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { HomeComponent } from '../components/home/home.component';


// Route Configuration
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            meta: {
                title: 'AmericanCoin - In Descentralization We Trust',
            }
        }
    }
];