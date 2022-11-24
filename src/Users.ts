export enum Countries {
    GERMANY = "GERMANY",
    BELGIUM = "BELGIUM",
    HOLLAND = "HOLLAND",
}

export enum Cities {
    AACHEN = "AACHEN",
    KÖLN = "KÖLN",
}

export enum Genders {
    MALE = "MALE",
    FEMALE = "FEMALE",
}

export interface Readiness {
    secretsAnswered: boolean;
    questionnaireRomanticAnswered: boolean;
    questionnaireFriendshipAnswered: boolean;
    questionnaireGroupAnswered: boolean;
    noGosRomanticAnswered: boolean;
    noGosFriendshipAnswered: boolean;
    noGosGroupAnswered: boolean;
    credits: number;
}

export interface Rating {
    dateId: string;
    rating: number;
}

export interface Ratings {
    ratings: Rating[];
    ratingAverage: number;
}

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    country: Countries;
    city: Cities;
    birthDate: Date;
    gender: Genders;
    readiness: Readiness;
    ratings: Ratings;
    alreadyDatedIds: string[];
}
