export enum QuestionTypes {
    NARROWING_DOWN_DATE = 'NARROWING_DOWN_DATE',
    NARROWING_DOWN_MEETING = 'NARROWING_DOWN_MEETING',
    QUESTIONNAIRE_DATE = 'QUESTIONNAIRE_DATE',
    QUESTIONNAIRE_MEETING = 'QUESTIONNAIRE_MEETING',
    SECRET = 'SECRET',
}

export enum QuestionWeight {
    'ONE' = 1,
    'TWO' = 2,
    'THREE' = 3,
    'FOUR' = 4,
    'FIVE' = 5,
}

export interface Question {
    questionId: String;
    questionType: QuestionTypes;
    internalName: String;
    isQuestionActive: Boolean;
}

export interface QuestionQuestionnaireDate extends Question {
    questionText: String;
    questionWeight: QuestionWeight;
    labelLow: String;
    labelHigh: String;
}
