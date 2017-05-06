import { Component, ViewChild , OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MdSidenav;

    constructor() { };

    ngOnInit() {
    };

    toggleSidenav() {
        this.sidenav.toggle();
    };

}
