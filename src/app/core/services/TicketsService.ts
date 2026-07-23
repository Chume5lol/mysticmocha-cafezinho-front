import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { TicketResponse } from "../models/ticket-response";

@Injectable({
    providedIn: 'root'
})

export class TicketsService{
private http = inject(HttpClient);

getAllTickets(){

    const token = localStorage.getItem("token")
        return this.http.get<TicketResponse[]>(
            "http://localhost:8080/ticket/view",
            {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
        )
    }
}