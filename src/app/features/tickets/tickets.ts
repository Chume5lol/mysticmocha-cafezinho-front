import { Component, inject, input, OnInit, signal } from "@angular/core";
import { TicketsService } from "../../core/services/TicketsService";
import { TicketResponse } from "../../core/models/ticket-response";
import { SidebarService } from "../../core/services/Expanded";


@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss'
})

export class TicketsComponent implements OnInit {
  allTickets = signal<TicketResponse[]>([]);

  private tickets = inject(TicketsService);
  ngOnInit(): void {
    this.getAllTickets()
  }
  sidebarService = inject(SidebarService);

  getAllTickets(): void {
    this.tickets.getAllTickets().subscribe({

      next: (resposta) => {
        this.allTickets.set(resposta);
      },
      error: (erro) => {
        console.log(erro);
      }
    })

  }






}