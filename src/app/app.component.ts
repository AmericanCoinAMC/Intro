import { Component, OnInit , ViewChild , ElementRef, Inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized } from '@angular/router';

import { TranslateService } from './languages';
import {MdSnackBar, MdSidenav} from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import {PageScrollService, PageScrollInstance} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public selectedLanguage: any;
    public supportedLangs: any;

    @ViewChild('sidenav') public _sidenav: MdSidenav;
    @ViewChild('container')
    private container: ElementRef;

    constructor(private _translate: TranslateService,
                private _snackBar: MdSnackBar,
                private _router: Router,
                private _pageScrollService: PageScrollService,
                @Inject(DOCUMENT) private document: any) {
        /*
        * Routing Subscription
        * */
        this._router.events.subscribe((val) => {
            // see also
            if (val instanceof NavigationStart) {
                if (this._sidenav.opened) {
                    this._sidenav.close();
                }
            }else if (val instanceof NavigationEnd) {

            }else if (val instanceof NavigationCancel) {

            }else if (val instanceof NavigationError) {

            }else if (val instanceof RoutesRecognized) {}
        });
    }


    /*
    * Language Related
    * */
    ngOnInit() {

        // Translations
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' }
        ];

        let locale = localStorage.getItem('localeId');
        if (!locale) {
            locale = this._translate.getDefaultLanguage().value;
        }

        this.selectedLanguage = TranslateService.buildLanguage(locale);
        this._translate.use(locale);

    }

    selectLang(lang: string) {
        // set current lang;
        this.selectedLanguage = TranslateService.buildLanguage(lang);
        localStorage.setItem('localeId', lang);

        this._snackBar.open(this.selectedLanguage.display + this._translate.instant('INTRO_CONTROLLER_IS_LOADING'), 'Ok', {
            duration: 2000
        });
        setTimeout(function() {
            location.reload(true);
        }, 3000);
    }



    /*
    * URL Loading
    * */

    openUrl (location: string): void {
        window.open(location, '_blank');
    }



    /*
    * Scroll to Top
    * */

    scrollToTop(): void {
        const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#inner-app-scroll-container');
        this._pageScrollService.start(pageScrollInstance);
    }
}
