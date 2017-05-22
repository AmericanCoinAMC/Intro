import { Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';


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
                        title: 'Atomic Projects - Build the Applications of the Future',
                        description: 'AmericanCoin is a private, secure, untraceable, decentralised digital currency.'
                    }
                }
            },
            {
                path: 'about',
                component: AboutComponent ,
                data: {
                    meta: {
                        title: 'About Us',
                        description: 'AmericanCoin is a private, secure, untraceable, decentralised digital currency.'
                    }
                }
            },
            {
                path: 'services',
                component: ServicesComponent,
                data: {
                    meta: {
                        title: 'Services',
                        description: 'AmericanCoin is a private, secure, untraceable, decentralised digital currency.'
                    }
                }
            },
            {
                path: 'portfolio',
                component: PortfolioComponent,
                data: {
                    meta: {
                        title: 'Portfolio',
                        description: 'AmericanCoin is a private, secure, untraceable, decentralised digital currency.'
                    }
                }
            },
            {
                path: 'contact',
                component: ContactComponent,
                data: {
                    meta: {
                        title: 'Contact',
                        description: 'AmericanCoin is a private, secure, untraceable, decentralised digital currency.'

                    }
                }
            }
        ]
    }
];