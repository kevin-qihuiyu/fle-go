export enum QuestionType {
    LISEZ_ET_CHOISISSEZ = 1,
    ECOUTEZ_ET_CHOISISSEZ = 2,
    ASSOCIEZ = 3,
}

export class Question {
    name: string;
    questionType: QuestionType;
    desc: string;
    imgSrc? :string;
}


class Answer {
    desc: string;
}

class ImageAnswer extends Answer {
    imgSrc: string;
}

export class QCMText extends Question {
    numOfChoices: number;
    choices: Answer[];
    correctChoiceId: number;
} 

export class QCMImage extends Question {
    numOfChoices: number;
    choices: ImageAnswer[];
} 

export class QCMAudioText extends Question {
    numOfChoices: number;
    audioSrc: string;
    choices: Answer[];
    correctChoiceId: number;
} 

export class AssociateImage extends Question {
    numOfChoices: number;
    choices: ImageAnswer[];
}