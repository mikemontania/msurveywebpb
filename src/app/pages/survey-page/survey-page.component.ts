import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Choice } from 'src/app/models/choice.model';
import { Question } from 'src/app/models/question.models';
import { Survey } from 'src/app/models/survey.model';
import { User } from 'src/app/models/user.model';
import { SurveyService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent {
  surveyId: number;
  survey: Survey;
  surveyForm: FormGroup;
  newQuestion: Question = new Question();
  question: Question = new Question();
  choice: Choice = new Choice();
  user: User;
  questions: Question[] = [];
  choices: Choice[] = [];
  titleEditMode = false;
  descriptionEditMode = false;
  rangeValue: number = 1;
  quantity: number = 1;
  constructor(private route: ActivatedRoute,
    private surveyService: SurveyService
    ) { }

    ngOnInit(): void {
      console.log('ksdnjofkldsfldsjflkdsjfkdsjfdskfjdksfjdksfjdfsfkjdskf')
      this.route.params.subscribe(params => {
        this.surveyId = +params['id']; // Convierte el parámetro a número
        this.loadSurvey();
      });
    }

    loadSurvey() {
      this.surveyService.getSurveyById(this.surveyId).subscribe(
        (content: any) => {
          console.log(content)
          this.survey = content.survey;
          this.questions = [...this.survey.Questions]
        },
        error => {
          console.error('Error loading survey:', error);
          // Podrías redirigir a la página de error aquí si es necesario
        }
      );
    }

    handleQuestionCreated(question: any) {
      console.log('Pregunta creada en el componente padre:', question);
      if (question) {
        this.questions = [...this.questions, question];
        console.log('array:', this.questions);
      }
      // Aquí puedes realizar cualquier otra lógica con la pregunta creada
    }


    onRangeValueChange(event) { console.log(event) }
    onQuantityChange(event) { console.log(event) }


    submitSurvey() {
      if (this.surveyForm.valid) {
        const survey: Survey = this.surveyForm.value;
        console.log(survey); // Aquí puedes enviar la encuesta al servidor o realizar las acciones necesarias
      }
    }

}
