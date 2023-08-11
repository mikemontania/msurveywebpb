import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/models/question.models';
import { SurveyResponse } from 'src/app/models/responseSurvey.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit, OnChanges {
  @Input() questions: Question[];
  responses: SurveyResponse[] = []; // Almacena las respuestas aquí
  optionDescriptions: string[] = [];
  rangeValue: number = 0; // Agregar esta propiedad para el rango
  quantity: number = 0;   // Agregar esta propiedad para la cantidad de estrellas

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('SimpleChanges')
    console.log(changes)
    // Inicializar las respuestas si estás editando una encuesta existente
    if (changes['questions'] && changes['questions'].currentValue) {
      this.responses = changes['questions'].currentValue.flatMap(question => {
        if (question.questionType === 'CHECKBOX' || question.questionType === 'RADIOBUTTON') {
          return question.Choices.map(choice => ({
            codSurveyResponse: null,
            codUser: null,
            codSurvey: null,
            codQuestion: question.codQuestion, // Asigna el ID de la pregunta
            codChoice: choice.codChoice, // Asigna el ID de la opción
            response: '', // Puedes inicializarlo como prefieras
            createdAt: null,
            createdBy: '',
            updatedAt: null,
            updatedBy: ''
          }));
        } else {
          return [{
            codSurveyResponse: null,
            codUser: null,
            codSurvey: null,
            codQuestion: question.codQuestion, // Asigna el ID de la pregunta
            codChoice: null,
            response: '', // Puedes inicializarlo como prefieras
            createdAt: null,
            createdBy: '',
            updatedAt: null,
            updatedBy: ''
          }];
        }
      });
    }
  }

  ngOnInit(): void {
    console.log(this.questions);
  }

  createRange(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }

}
