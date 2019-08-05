﻿export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    createdDate: Date;
    cat1doneQuestionIds: string[];
    cat2doneQuestionIds: string[];
    cat3doneQuestionIds: string[];
}