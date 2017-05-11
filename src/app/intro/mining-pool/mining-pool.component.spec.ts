import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningPoolComponent } from './mining-pool.component';

describe('MiningPoolComponent', () => {
  let component: MiningPoolComponent;
  let fixture: ComponentFixture<MiningPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
