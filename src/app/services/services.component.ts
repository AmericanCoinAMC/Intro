import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
    sections: any[] = ['software', 'graphic-design', 'productions', 'marketing'];
    activeSection: string;

  constructor() { }

  ngOnInit() {
      this.activateSection('software');
  }

  activateSection(section: string): void {
      this.activeSection = section;
  }



}
