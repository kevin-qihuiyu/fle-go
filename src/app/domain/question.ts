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
    // Sub type: associate text to image
    ASSOCIEZ_TEXT_TO_IMAGE = 5,
    // Question Type 3: ASSOCIEZ
    // Sub type: associate text to image
    ASSOCIEZ_IMAGE_TO_GOAL = 6,
    // Question Type 3: ASSOCIEZ
    // Sub type: cardsorting, text to 2 goals (class)
    CARDSORTING_TEXT_TO_2_GOALS = 7,
    // Question Type 3: ASSOCIEZ
    // Sub type: cardsorting, image to 2 goals (class)
    CARDSORTING_IMAGE_TO_2_GOALS = 8,

    // Question Type 4: SELECT_ON_CALENDAR
    SELECT_ON_CALENDAR = 9
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

export class AssociateImageToGoal extends Question {
    choices: ImageAnswer[];
    goal: string;
}

export class CardsortingTextTo2Goals extends Question {
    choices: Answer[];
    goals: string[];
}

export class CardsortingImageTo2Goals extends Question {
    numOfChoices: number;
    choices: Answer[];
    goals: string[];
}

export class SelectOnCalendar extends Question {
    selectedDate;
    correctDate;
}
