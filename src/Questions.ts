export enum QuestionTypes {
    NARROWING_DOWN_DATE = "NARROWING_DOWN_DATE",
    NARROWING_DOWN_MEETING = "NARROWING_DOWN_MEETING",
    QUESTIONNAIRE_DATE = "QUESTIONNAIRE_DATE",
    QUESTIONNAIRE_MEETING = "QUESTIONNAIRE_MEETING",
    SECRET = "SECRET",
}

export enum QuestionWeight {
    "ONE" = 1,
    "TWO" = 2,
    "THREE" = 3,
    "FOUR" = 4,
    "FIVE" = 5,
}

export interface Question {
    questionId: string;
    questionType: QuestionTypes;
    internalName: string;
    isQuestionActive: boolean;
}

export interface QuestionQuestionnaire extends Question {
    questionText: string;
    questionWeight: QuestionWeight;
    labelLow: string;
    labelHigh: string;
}

export interface QuestionSecret extends Question {
    questionLabel: string;
    questionType: QuestionTypes.SECRET;
}
