import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from '../_models';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    //url = "http://127.0.0.1:5000/register";
    
    //getUserByUsername(username: string): Observable<User[]> {
        //username = '^'+username.trim()+'$'; //For exact match testing in Angular In-Memory Web API 

        //return this.http.get<User[]>(this.url + '?username=' + username);
   // }      

    getAll() {
        return this.http.get<User[]>(`http://127.0.0.1:5000/users`);
    }

    register(user: User) {
        return this.http.post(`http://127.0.0.1:5000/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`http://127.0.0.1:5000/users/${id}`);
    }
    //isUsernameRegisterd(username: string) {
       // const headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //return this.http.post('http://127.0.0.1:5000/register', JSON.stringify({ username: username }))
            //.pipe(map((response: any) => response.json()));
            //.catch(this.handleError);
    //}
//
    //private handleError(error: any) {
        //console.log(error);
        //return Observable.throw(error.json());
        //;
    //}
}