import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { SidebarComponent } from './shared/components/sidebar/sidebar';
import { MainComponent } from './shared/components/main/main';
import { AuthService } from './core/services/AuthService';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  authService = inject(AuthService);

  logado = this.authService.estaLogado();
}
