import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdatepickerComponent } from './matdatepicker.component';

describe('MatdatepickerComponent', () => {
  let component: MatdatepickerComponent;
  let fixture: ComponentFixture<MatdatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatdatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatdatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
