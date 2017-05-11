import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../languages';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public translatedText: string;
    public selectedLanguage: any;
    public supportedLangs: any;


    constructor(private _translate: TranslateService, private snackBar: MdSnackBar) { }

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

        this.snackBar.open(this.selectedLanguage.display + this._translate.instant('INTRO_CONTROLLER_IS_LOADING'), 'Ok', {
            duration: 2000
        });
        setTimeout(function() {
            location.reload(true);
        }, 3000);
    }

}
