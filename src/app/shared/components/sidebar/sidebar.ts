import { Component, inject } from "@angular/core";
import { AuthService } from "../../../core/services/AuthService";
import { RouterLink } from "@angular/router";
import { SidebarService } from "../../../core/services/Expanded";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
  imports: [RouterLink]
})

export class SidebarComponent {

  sidebarService = inject(SidebarService);
  authService = inject(AuthService);


  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
