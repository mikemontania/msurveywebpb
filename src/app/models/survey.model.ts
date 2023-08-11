import { Question } from "./question.models";

export class Survey {
  codSurvey?: number;
  title: string;
  description?: string;
  img?: string;
  active?: boolean;
  creationDate?: Date;
  codUser: number;
  Questions: Question[];
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  constructor(
  ) { }
}
