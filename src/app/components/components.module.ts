import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoandTermSliderComponent } from './loand-term-slider/loand-term-slider.component';
import { AppCustomRatingComponent } from './app-custom-rating/app-custom-rating.component';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CaritaButtonComponent } from './carita-button/carita-button.component';
import { MapComponent } from './mapa/mapa.component';
 


@NgModule({
  declarations: [
    LoandTermSliderComponent,
    AppCustomRatingComponent,
    CaritaButtonComponent,
    MapComponent   ],
  exports: [
    LoandTermSliderComponent,
    AppCustomRatingComponent,
    CaritaButtonComponent,
    MapComponent   ],
  imports: [
    CommonModule,
    FormsModule,
    NgbRating
  ]
})
export class ComponentsModule { }
