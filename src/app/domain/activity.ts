import { Question } from './question';
import { Category } from './category';

export class Activity {
    name: string;
    category: Category;
    difficulty?: Difficulty;
    unlocked: true;
    question?: Question;
}

export enum Difficulty {
    DÉBUTANT = "DÉBUTANT",
    INTERMÉDIAIRE = "INTERMÉDIAIRE",
    DIFFICILE = "DIFFICILE",
}
