import { Component, inject } from "@angular/core";
import { AuthService } from "../../../core/services/AuthService";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})


export class LoginComponent {
  nickname = '';
  password = '';

  private auth = inject(AuthService);
  private router = inject(Router)

  ngOnInit(): void {
    this.auth.logout()
  }

  login() {
    localStorage.removeItem("token")
    this.auth.login(this.nickname, this.password).subscribe({

      next: (resposta) => {
        this.auth.salvarToken(resposta.token);
        console.log(resposta)
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        console.log(erro);
        alert("Usuário ou senha inválidos")
      }
    })
  }

}
