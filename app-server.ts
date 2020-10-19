import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './user.model';



@Injectable({

 providedIn: 'root'

})

export class UserService {

 private apiUrl = 'https://localhost:8080/api/users';

// private file can't be accepted in public domain

 constructor(private http: HttpClient) { }



 getUsers(): Observable<User[]> {

   return this.http.get<User[]>(this.apiUrl)

 }

}
