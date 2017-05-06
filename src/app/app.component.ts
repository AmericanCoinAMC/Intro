import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: '<app-main></app-main>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  };


}
