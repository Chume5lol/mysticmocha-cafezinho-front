import { inject, Injectable, signal } from '@angular/core';
import { UserRegister } from '../models/user-register';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './AuthService';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  

  register(firstName: String,
    lastName: String,
    nickname: String,
    email: String,
    department: String,
    password: String,
    userRole: String) {
    return this.http.post<UserRegister>(
      "http://localhost:8080/users/register",
      {
        firstName, lastName, nickname, email, department, password, userRole
      }
    )
  }

  findUsers() {
    const token = localStorage.getItem("token")
    return this.http.get<UserResponse[]>(
      "http://localhost:8080/users/findAll",
      {
        headers: {
                    authorization: `Bearer ${token}`
                }
      }
    )
  }


}