import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialSaltComponent } from './celestial-salt.component';

describe('CelestialSaltComponent', () => {
  let component: CelestialSaltComponent;
  let fixture: ComponentFixture<CelestialSaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelestialSaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelestialSaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
