import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdayComponent } from './gday.component';

describe('GdayComponent', () => {
  let component: GdayComponent;
  let fixture: ComponentFixture<GdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
