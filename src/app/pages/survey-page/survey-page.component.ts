import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  mostrar: boolean = false;
  constructor(private route: ActivatedRoute,
    private surveyService: SurveyService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.surveyForm = this.formBuilder.group({
      // ...
      rangeValue: [null, Validators.required] // Use Validators.required to make the range value mandatory
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const surveyId = +params['id']; // Convierte el parámetro a número
      const encuestaCompletada = localStorage.getItem(surveyId.toString());
      if (encuestaCompletada) {
        // El usuario ya completó la encuesta, puedes redirigirlo o mostrar un mensaje
        // para evitar que complete la encuesta nuevamente.
        this.mostrar = true
      } else {
        this.loadSurvey(surveyId);
      }
    });
  }

  loadSurvey(surveyId) {
    // Muestra el mensaje de carga
    Swal.fire({
      title: 'Espere por favor...',
      allowOutsideClick: false,
      icon: 'info',
    });
    Swal.showLoading();
    this.surveyService.getSurveyById(surveyId).subscribe(
      (content: any) => {
        console.log(content);
        this.survey = content.survey;

        if (this.survey) {
          this.questions = this.survey.Questions;

          this.responses = this.questions.map((question) => {
            return {
              codSurveyResponse: null,
              codUser: this.survey.codUser,
              codSurvey: this.survey.codSurvey,
              codQuestion: question.codQuestion,
              codChoice: question.Choices[0].codChoice,
              type: question.questionType,
              choiceId: question.questionType + question.codQuestion,
              response: '',
              selectedChoices: [],
              createdAt: null,
              createdBy: '',
              updatedAt: null,
              updatedBy: ''
            };
          }).flat(); // Aplanar el arreglo de respuestas
        }
        console.log(this.responses)
        Swal.close();
      },
      error => {
        console.error('Error loading survey:', error);
        Swal.close();
        // Puedes redirigir a la página de error aquí si es necesario
      }
    );
  }

  onSliderValueChange(newValue: number, index: number): void {
    this.responses[index].response = newValue;
  }

  onCheckboxChange(index: number, optionId: number): void {
    if (this.responses[index].selectedChoices.includes(optionId)) {
      this.responses[index].selectedChoices = this.responses[index].selectedChoices.filter(id => id !== optionId);
    } else {
      this.responses[index].selectedChoices.push(optionId);
    }
  }
  onSliderFormSubmit() {
    // Handle the form submission or other actions here
  }
  onRatingChange() {
    // Handle the rating change or other actions here
  }
  async submitSurvey() {
    console.log(this.responses);


    this.responses = await this.transformResponses();

  console.log(this.responses)

    if (this.surveyForm.valid) {
      console.log('valido');
      // Continuar con la presentación del formulario
    } else {
      // Mostrar un error o manejar el estado inválido del formulario
    }

    this.surveyService.send(this.responses)
      .subscribe(
        response => {
          Swal.fire('Encuesta terminada', `Muchas gracias !!!.`, 'success');
          this.router.navigate(['/survey/', this.survey.codSurvey]);

        }
      );
    // localStorage.setItem(this.survey.codSurvey.toString(), 'true');
  }

  //crea duplica la cantidad responses de los checkbox corrigiendo su propiedad selectedChoices
  transformResponses() {
    return this.responses.flatMap(response => {
      if (response.type === 'CHECKBOX') {
        return response.selectedChoices.map(choiceId => ({
          ...response,
          selectedChoices: [],
          response: choiceId,
          codChoice:choiceId
        }));
      } 
      return [response];
    });
  };


}
