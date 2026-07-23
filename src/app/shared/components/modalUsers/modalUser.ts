import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modalUser.html',
  styleUrl: './modalUser.scss'
})
export class ModalComponent {

  aberto = input(false);

  fechar = output<void>();

  fecharModal() {
    this.fechar.emit();
  }
}