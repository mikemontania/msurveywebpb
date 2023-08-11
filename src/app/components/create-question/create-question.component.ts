import { Component, EventEmitter, Output } from '@angular/core';
import { Choice } from 'src/app/models/choice.model';
import { Question } from 'src/app/models/question.models';
import { SurveyResponse } from 'src/app/models/responseSurvey.model';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {
  // Propiedades del formulario
  showQuestion: boolean = false;
  loanTerm: number = 10;
  unitText: string = 'opciones';
  rangeValue: number = 1;
  quantity: number = 1;
  choiceText: string = '';
  choices: Choice[] = [];
  optionDescriptions: string[] = [];

  question: Question = new Question();
  // Evento de salida para la pregunta creada
  @Output() questionCreated = new EventEmitter<any>();
  constructor() {
    this.question.questionText = '';
    this.question.questionType = 'INPUT';
    this.question.alignment = 'left';
    this.question.alignment = 'normal';
    this.question.amount = 3;
    this.question.response = new SurveyResponse();
    this.question.obligatory = false;
    this.choices = [];
  }
  // Método para manejar el envío del formulario

  async onSubmit() {
    const newQuestion = { ...this.question }; // Crear una nueva instancia de Question

    if (newQuestion.questionType == 'CHECKBOX' || newQuestion.questionType == 'RADIOBUTTON') {
      newQuestion.Choices = this.optionDescriptions.map((description, i) => ({
        codChoice: null,
        choiceType: newQuestion.questionType,
        choiceText: description,
        codQuestion: null,
        createdAt: new Date(),
        createdBy: '',
        updatedAt: new Date(),
        updatedBy: ''
      }));
    } else {
      newQuestion.Choices = [{
        codChoice: null,
        choiceType: newQuestion.questionType,
        choiceText: '',
        codQuestion: null,
        createdAt: new Date(),
        createdBy: '',
        updatedAt: new Date(),
        updatedBy: ''
      }];
    }

    // Resto de la lógica para guardar la pregunta

    this.questionCreated.emit(newQuestion);
  }
  addChoice() {
    const newChoice: Choice = {
      codChoice: this.choices.length + 1,
      choiceType: '',
      choiceText: '',
      codQuestion: null,
      createdAt: new Date(),
      createdBy: '',
      updatedAt: new Date(),
      updatedBy: ''
    };

    this.choices.push(newChoice);
  }
  showQuestionText() {
    this.showQuestion = true;
  }
  onQuestionTypeChange() {
    this.question.amount = 3;
    this.quantity = 1;
    this.rangeValue = 1;
  }
  createRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
  clearQuestionText() {
    this.showQuestion = false;
    this.question.questionText = '';
  }
  removeChoice(index: number) {
    this.choices.splice(index, 1);
  }
  onSliderValueChange(newValue: number): void {
    this.question.amount = newValue;
    this.optionDescriptions = Array(newValue).fill('');
  }
}
