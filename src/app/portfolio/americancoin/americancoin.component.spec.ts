import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericancoinComponent } from './americancoin.component';

describe('AmericancoinComponent', () => {
  let component: AmericancoinComponent;
  let fixture: ComponentFixture<AmericancoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericancoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericancoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
