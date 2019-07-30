export enum QuestionType {
    // Question Type 1: LISEZ_ET_CHOISISSEZ
    // Sub type: select text
    LISEZ_ET_CHOISISSEZ_TEXT = 1,
    // Question Type 1: LISEZ_ET_CHOISISSEZ
    // Sub type: select image
    LISEZ_ET_CHOISISSEZ_IMAGE = 2,

    // Question Type 2: ECOUTEZ_ET_CHOISISSEZ
    // Sub type: select text
    ECOUTEZ_ET_CHOISISSEZ_TEXT = 3,
    // Question Type 2: ECOUTEZ_ET_CHOISISSEZ
    // Sub type: select image
    ECOUTEZ_ET_CHOISISSEZ_IMAGE = 4,

    // Question Type 3: ASSOCIEZ
    // Sub type: associate text to image, via multiple selection
    ASSOCIEZ_TEXT_TO_IMAGE = 5,
}

export class Question {
    qid: number;
    name: string;
    questionType: QuestionType;
    desc?: string;
    imgDesc?: string;
    audioDesc?: string;
}


export class Answer {
    id: number;
    desc: string;
    imgSrc?: string;
}

export class ImageAnswer {
    id: number;
    desc?: string;
    value?: number;
    imgSrc: string;
}


// Question Type 1: LISEZ_ET_CHOISISSEZ
// Sub type: select text
// Question Type 2: ECOUTEZ_ET_CHOISISSEZ
// Sub type: select text
export class QCMSelectText extends Question {
    choices: Answer[];
    correctChoiceId: number;
} 

// Question Type 1: LISEZ_ET_CHOISISSEZ
// Sub type: select image
// Question Type 2: ECOUTEZ_ET_CHOISISSEZ
// Sub type: select image
export class QCMSelectImage extends Question {
    choices: ImageAnswer[];
    correctChoiceId: number;
} 


// Question Type 3: ASSOCIEZ
// Sub type: associate text to image
export class AssociateTextToImage extends Question {
    choices: Answer[];
}

