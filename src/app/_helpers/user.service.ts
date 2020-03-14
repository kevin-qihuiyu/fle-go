import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // apiUrl = "https://flego-server.herokuapp.com"
    apiUrl = "https://flego-server-1562169565639.appspot.com/"

    getCurrent() {
        return this.http.get(this.apiUrl + `/users/current`);
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