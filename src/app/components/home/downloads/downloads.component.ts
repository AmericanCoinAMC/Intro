import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

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
