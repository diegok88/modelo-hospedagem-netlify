import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaTeste } from './components/tela-teste/tela-teste';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TelaTeste],
  template: `
    <app-tela-teste />
    <router-outlet />
  `,
})
export class App {
  protected readonly title = signal('modelo-hospedagem-netlify');
}
