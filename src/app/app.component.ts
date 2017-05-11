import { Component, OnInit , ViewChild , ElementRef, Inject } from '@angular/core';
import { TranslateService } from '../languages';
import {MdSnackBar, MdSidenav} from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';
import {PageScrollInstance, PageScrollService} from 'ng2-page-scroll';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public translatedText: string;
    public selectedLanguage: any;
    public supportedLangs: any;

    @ViewChild('sidenav') public sidenav: MdSidenav;
    @ViewChild('container')
    private container: ElementRef;

    constructor(private _translate: TranslateService, private _snackBar: MdSnackBar, private pageScrollService: PageScrollService , @Inject(DOCUMENT) private document: any) { }


    /*
    * Language Related
    * */
    ngOnInit() {
        /*
        * Language Related
        * */

        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' }
        ];

        let locale = localStorage.getItem('localeId');
        if (!locale) {
            locale = this._translate.getDefaultLanguage();
        }

        this.selectedLanguage = this._translate.buildLanguage(locale);
        this._translate.use(locale);
    }

    selectLang(lang: string) {
        // set current lang;
        this.selectedLanguage = this._translate.buildLanguage(lang);
        localStorage.setItem('localeId', lang);

        this._snackBar.open(this.selectedLanguage.display + this._translate.instant('INTRO_CONTROLLER_IS_LOADING'), 'Ok', {
            duration: 2000
        });
        setTimeout(function() {
            location.reload(true);
        }, 3000);
    }

    /*
    * Navigation Related
    * */

    goto(location: string, type: string): void {
        let self = this;

        if (self.sidenav.opened) {
            self.sidenav.close();

            setTimeout(function(){
                /*let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(self.document, '#contact');
                 console.log(self.pageScrollService);
                 self.pageScrollService.start(pageScrollInstance);*/
                /*let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#' +
                 location);

                 this._pageScrollService.start(pageScrollInstance);*/
                if (type && type === 'url') {
                    self.openUrl(location);
                }else {
                    self.updateHash(location);
                }
            }, 500);
        } else {
            if (type && type === 'url') {
                self.openUrl(location);
            }else {
                self.updateHash(location);
            }
        }
    };

    updateHash (location: string): void {
        history.pushState('', document.title, window.location.pathname);
        window.location.hash = location;
    };

    openUrl (location: string): void {
        window.open(location, '_blank');
    };
}
