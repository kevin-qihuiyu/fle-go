﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    apiUrl = "https://flego-server.herokuapp.com/"

    getAll() {
        return this.http.get<User[]>(this.apiUrl + `users`);
    }

    register(user: User) {
        return this.http.post(this.apiUrl + `/users/register`, user);
    }

    update(id: string, user: User) {
        return this.http.put<User>(this.apiUrl + `/users/${id}`, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + `/users/${id}`);
    }
}