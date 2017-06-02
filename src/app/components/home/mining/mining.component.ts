import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mining',
    templateUrl: './mining.component.html',
    styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    /*
     * URL Loading
     * */

    openUrl (location: string): void {
        window.open(location, '_blank');
    }
}
