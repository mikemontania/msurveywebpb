import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomRatingComponent } from './app-custom-rating.component';

describe('AppCustomRatingComponent', () => {
  let component: AppCustomRatingComponent;
  let fixture: ComponentFixture<AppCustomRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCustomRatingComponent]
    });
    fixture = TestBed.createComponent(AppCustomRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
