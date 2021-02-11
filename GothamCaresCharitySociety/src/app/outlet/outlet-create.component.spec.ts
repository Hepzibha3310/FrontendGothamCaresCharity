import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletCreateComponent } from './outlet-create.component';

describe('OutletCreateComponent', () => {
  let component: OutletCreateComponent;
  let fixture: ComponentFixture<OutletCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
