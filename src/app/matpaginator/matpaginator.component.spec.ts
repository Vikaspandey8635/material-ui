import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatpaginatorComponent } from './matpaginator.component';

describe('MatpaginatorComponent', () => {
  let component: MatpaginatorComponent;
  let fixture: ComponentFixture<MatpaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatpaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatpaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
