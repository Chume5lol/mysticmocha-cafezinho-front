import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isExpanded = signal(false);

  toggle() {
    this.isExpanded.update(v => !v);
  }

  setExpanded(valor: boolean) {
    this.isExpanded.set(valor);
  }
}