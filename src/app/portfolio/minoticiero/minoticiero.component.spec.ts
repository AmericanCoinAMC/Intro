import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinoticieroComponent } from './minoticiero.component';

describe('MinoticieroComponent', () => {
  let component: MinoticieroComponent;
  let fixture: ComponentFixture<MinoticieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinoticieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinoticieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
