import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiaelmundoComponent } from './cambiaelmundo.component';

describe('CambiaelmundoComponent', () => {
  let component: CambiaelmundoComponent;
  let fixture: ComponentFixture<CambiaelmundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiaelmundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiaelmundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
