import { Component, inject, signal } from "@angular/core";
import { SidebarService } from "../../core/services/Expanded";
import { ModalComponent } from "../../shared/components/modalUsers/modalUser";
import { UserService } from "../../core/services/UserService";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UserRegister } from "../../core/models/user-register";
import { UserResponse } from "../../core/models/user-response";

@Component({
  selector: 'app-users',
  standalone: true,
  styleUrl: './users.scss',
  templateUrl: './users.html',
  imports: [ModalComponent, FormsModule]
})

export class UsersComponent {
  sidebarService = inject(SidebarService);
  user = inject(UserService)
  modalAberto = signal(false);
  private router = inject(Router)

  allUsers = signal<UserResponse[]>([]);
  

  abrirModal() {
    this.modalAberto.set(true);
  }

  fecharModal() {
    this.modalAberto.set(false);
  }

  firstName = ''
  lastName = ''
  nickname = ''
  email = ''
  department = ''
  role = ''
  password = ''
  thisthue = true
  i = 0

  registerUser() {
    this.user.register(this.firstName, this.lastName, this.nickname, this.email, this.department, this.password, this.role).subscribe({

      next: (resposta) => {
        console.log(resposta)
        this.fecharModal()
        this.getAllUsers()
        alert("Usuário criado!")
      },
      error: (erro) => {
        console.log(erro);
        alert("Informações incorretas" + erro.message)
      }
    })
  }

  getAllUsers(): void {
    this.user.findUsers().subscribe({

      next: (resposta) => {
        this.allUsers.set(resposta);
      },
      error: (erro) => {
        console.log(erro);
      }
    })

  }

  ngOnInit(): void {
    this.getAllUsers();
    
  }

}