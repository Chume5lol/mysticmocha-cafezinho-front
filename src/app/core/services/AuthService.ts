import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginResponse } from "../models/login-response";
import { jwtDecode, JwtPayload } from "jwt-decode";

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    private http = inject(HttpClient);

    login(nickname: string, password: string){
        return this.http.post<LoginResponse>(
            "http://localhost:8080/auth/authenticate",
            {
                nickname,
                password
            }
        )
    }

    salvarToken(token: string) {
        localStorage.setItem("token", token)
    }

    getToken() {
        return localStorage.getItem("token")
    }

    logout() {
        localStorage.removeItem("token")
    }

    estaLogado(): boolean{
        const token = this.getToken();

        if(!token) {
            return false
        }

        const payload = jwtDecode<JwtPayload>(token)

        return payload.exp! * 1000 > Date.now();
    }
}