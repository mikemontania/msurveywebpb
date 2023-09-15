


export class SurveyResponse {

    codSurveyResponse: number;
    codUser: number;
    codSurvey: number;
    codQuestion: number;
    codChoice: number;
    type: string;
    choiceId: string;
    question: string;
    response: any; // Cambia 'any' por el tipo adecuado para tus respuestas
    selectedChoices:any[];
    obligatory:boolean;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;


    }
