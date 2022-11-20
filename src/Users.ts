export enum Countries {
    GERMANY = "GERMANY",
    BELGIUM = "BELGIUM",
    HOLLAND = "HOLLAND",
}

export enum Genders {
    MALE = "MALE",
    FEMALE = "FEMALE",
}

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    country: Countries;
    birthDate: Date;
    gender: Genders;
}
