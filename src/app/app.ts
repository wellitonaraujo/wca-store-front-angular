import { HeaderActions } from './layout/header-actions/header-actions';
import { MatToolbar } from '@angular/material/toolbar';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [MatToolbar, HeaderActions],
  template: `
   <mat-toolbar class="w-full elevated py-2">
      <div class="max-w-[1200px] mx-auto w-full flex items-center justify-between">
          <span>WCA Store</span>
        <app-header-actions /> 
      </div>
  </mat-toolbar>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('wca-store-front');
}
