import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Choice } from 'src/app/models/choice.model';
import { Question } from 'src/app/models/question.models';
import { SurveyResponse } from 'src/app/models/responseSurvey.model';
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
  responses: SurveyResponse[] = []; // Almacena las respuestas aquí
  optionDescriptions: string[] = [];

  constructor(private route: ActivatedRoute,
    private surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    console.log('ksdnjofkldsfldsjflkdsjfkdsjfdskfjdksfjdksfjdfsfkjdskf')
    this.route.params.subscribe(params => {
      const surveyId = +params['id']; // Convierte el parámetro a número
      this.loadSurvey(surveyId);
    });
  }

  loadSurvey(surveyId) {
    this.surveyService.getSurveyById(surveyId).subscribe(
      (content: any) => {
        console.log(content);
        this.survey = content.survey;

        if (this.survey) {
          this.questions = this.survey.Questions;

          this.responses = this.questions.map((question) => {
            if (question.questionType === 'CHECKBOX' || question.questionType === 'RADIOBUTTON') {
              const questionResponses = question.Choices.map((choice) => ({
                codSurveyResponse: null,
                codUser: this.survey.codUser,
                codSurvey: this.survey.codSurvey,
                codQuestion: question.codQuestion,
                codChoice: choice.codChoice,
                response: '',
                createdAt: null,
                createdBy: '',
                updatedAt: null,
                updatedBy: ''
              }));
              return questionResponses; // Aplanar el arreglo de respuestas
            } else {
              return {
                codSurveyResponse: null,
                codUser: this.survey.codUser,
                codSurvey: this.survey.codSurvey,
                codQuestion: question.codQuestion,
                codChoice:  question.Choices[0].codChoice,
                response: '',
                createdAt: null,
                createdBy: '',
                updatedAt: null,
                updatedBy: ''
              };
            }
          }).flat(); // Aplanar el arreglo de respuestas
        }
      },
      error => {
        console.error('Error loading survey:', error);
        // Puedes redirigir a la página de error aquí si es necesario
      }
    );
  }

  submitSurvey() {
    if (this.surveyForm.valid) {
      const survey: Survey = this.surveyForm.value;
      console.log(survey); // Aquí puedes enviar la encuesta al servidor o realizar las acciones necesarias
    }
  }

}
