import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoandTermSliderComponent } from './loand-term-slider/loand-term-slider.component';
import { AppCustomRatingComponent } from './app-custom-rating/app-custom-rating.component';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LoandTermSliderComponent,
    AppCustomRatingComponent,
   ],
  exports: [
    LoandTermSliderComponent,
    AppCustomRatingComponent,
   ],
  imports: [
    CommonModule,
    FormsModule,
    NgbRating
  ]
})
export class ComponentsModule { }
