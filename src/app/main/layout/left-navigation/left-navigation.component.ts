import { Component, ViewChild , OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
    selector: 'app-left-navigation',
    templateUrl: './left-navigation.component.html',
    styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MdSidenav;

    constructor() { };

    ngOnInit() {
    };

    toggleSidenav() {
        this.sidenav.toggle();
    }

}
