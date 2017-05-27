import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    sections: any[] = [
        {
            long: 'AmericanCoin',
            short: 'amc',
            services: ['software', 'graphic-design', 'marketing']
        },
        {
            long: 'The World Bank',
            short: 'wb',
            services: ['productions']
        },
        {
            long: 'Mi Noticiero',
            short: 'mn',
            services: ['software', 'graphic-design']
        },
        {
            long: 'CambiaelMundo',
            short: 'cem',
            services: ['software', 'graphic-design', 'productions', 'marketing']
        },
        {
            long: 'Kritica',
            short: 'kritica',
            services: ['software', 'graphic-design', 'productions', 'marketing']
        },
        {
            long: "G'Day",
            short: 'gday',
            services: ['software', 'graphic-design',  'productions', 'marketing']
        },
        {
            long: 'Celestial Salt',
            short: 'cs',
            services: ['software', 'graphic-design',  'productions', 'marketing']
        }
    ];
    activeSection: string;

    constructor() {

    }

    ngOnInit() {
        this.activateSection('amc');
    }

    activateSection(section: string): void {
        this.activeSection = section;
    }

}
