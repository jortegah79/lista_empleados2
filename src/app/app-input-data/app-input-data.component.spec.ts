import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputDataComponent } from './app-input-data.component';

describe('AppInputDataComponent', () => {
  let component: AppInputDataComponent;
  let fixture: ComponentFixture<AppInputDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInputDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
