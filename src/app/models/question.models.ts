import { Choice } from "./choice.model";
import { SurveyResponse } from "./responseSurvey.model";

export class Question {


  codQuestion?: number;
  questionText: string;
  questionType: string;
  alignment: string;
  bold: string;
  obligatory: boolean;
  amount: number;
  img?: string;
  codSurvey: number;
  Choices?: Choice[];
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;



    constructor(

    ) {}
  }
