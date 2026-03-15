import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet],
  template: `
    <app-header />
    <main class="h-[calc(100% -64px)] overflow-auto">
      <router-outlet />
    </main>
  `,
})
export class App {
  protected readonly title = signal('wca-store-front');
}