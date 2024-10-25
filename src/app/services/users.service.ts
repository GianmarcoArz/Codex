import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../interfaces/i-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.usersUrl);
  }
}
