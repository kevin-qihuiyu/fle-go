export class Activity {
    name: string;
    categoryId: number;
    difficulty?: Difficulty;
    unlocked?: true;
    questionId: number;
}

export enum Difficulty {
    DÉBUTANT = "DÉBUTANT",
    INTERMÉDIAIRE = "INTERMÉDIAIRE",
    DIFFICILE = "DIFFICILE",
}
