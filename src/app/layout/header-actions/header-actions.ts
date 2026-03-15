import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-actions',
  imports: [MatButton, MatIcon, MatIconButton, RouterLink],
  template: `
    <div class="flex items-center gap-2">
      <button matIconButton routerLink="wishlist">
        <mat-icon>favorite</mat-icon>
      </button>

      <button matIconButton routerLink="products">
        <mat-icon>shopping_cart</mat-icon>
      </button>

      <button matButton>Entrar</button>
      <button matButton="filled">Criar conta</button>
    </div>
  `,
  styles: ``,
})
export class HeaderActions {}
