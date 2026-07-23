import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../../core/services/AuthService";
import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  standalone: true,
  styleUrls: ['./navbar.scss'],
  templateUrl: './navbar.html'
})
export class NavbarComponent {

    authService = inject(AuthService);
    
    router = inject(Router)
    
    logout() {
        localStorage.removeItem("token")
        this.router.navigate(['/login']);
    }
}