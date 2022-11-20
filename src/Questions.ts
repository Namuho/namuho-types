export enum QuestionTypes {
    NARROWING_DOWN_DATE = "NARROWING_DOWN_DATE",
    NARROWING_DOWN_MEETING = "NARROWING_DOWN_MEETING",
    NARROWING_DOWN_GROUP = "NARROWING_DOWN_GROUP",
    QUESTIONNAIRE_DATE = "QUESTIONNAIRE_DATE",
    QUESTIONNAIRE_MEETING = "QUESTIONNAIRE_MEETING",
    QUESTIONNAIRE_GROUP = "QUESTIONNAIRE_GROUP",
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
    internalName: string;
    isQuestionActive: boolean;
}

export interface QuestionQuestionnaire extends Question {
    questionText: string;
    questionWeight: QuestionWeight;
    labelLow: string;
    labelHigh: string;
    questionType: Omit<QuestionTypes, QuestionTypes.SECRET>;
}

export interface QuestionSecret extends Question {
    questionLabel: string;
    questionType: QuestionTypes.SECRET;
}
