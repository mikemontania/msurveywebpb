import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandTermSliderComponent } from './loand-term-slider.component';

describe('LoandTermSliderComponent', () => {
  let component: LoandTermSliderComponent;
  let fixture: ComponentFixture<LoandTermSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoandTermSliderComponent]
    });
    fixture = TestBed.createComponent(LoandTermSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
