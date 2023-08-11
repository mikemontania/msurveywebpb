import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { FormsModule } from '@angular/forms'; 
import { LoandTermSliderComponent } from './loand-term-slider/loand-term-slider.component';
import { AppCustomRatingComponent } from './app-custom-rating/app-custom-rating.component';
import { NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { QuestionListComponent } from './question-list/question-list.component'; 



@NgModule({
  declarations: [
    CreateQuestionComponent,
    LoandTermSliderComponent,
    AppCustomRatingComponent,
    QuestionListComponent
  ],
  exports: [
    CreateQuestionComponent,
    LoandTermSliderComponent,
    AppCustomRatingComponent,
    QuestionListComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     NgbRating 
  ]
})
export class ComponentsModule { }
