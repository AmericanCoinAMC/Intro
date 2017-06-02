import { Component, OnInit , ViewChild , ElementRef, Inject } from '@angular/core';
import {MdSnackBar, MdSidenav} from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import {PageScrollService, PageScrollInstance} from 'ng2-page-scroll';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public pageLoaded: string;
    @ViewChild('sidenav') public _sidenav: MdSidenav;
    @ViewChild('container')
    private container: ElementRef;

    constructor(private _snackBar: MdSnackBar,
                private _pageScrollService: PageScrollService,
                @Inject(DOCUMENT) private document: any) {
    }

    ngOnInit() {
    }



    /*
     * URL Loading
     * */

    openUrl (location: string): void {
        window.open(location, '_blank');
    }

    /*
     * Scroll
     * */

    scrollTo(destination: string): void {
        if (this._sidenav.opened) { this._sidenav.close(); }
        const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#' + destination);
        this._pageScrollService.start(pageScrollInstance);
    }

}
