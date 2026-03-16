import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Product } from '../../models/product';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../../ecommerce-store';

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon],
  template: `
    <div class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full relative">
      <img [src]="product().imageUrl" class="w-full h-[300px] object-cover rounded-t-xl" />
      <button 
        class="absolute cursor-pointer z-10 top-3 right-3 w-10 h-10 bg-white/90 hover:bg-white rounded-full p-2"
        (click)="favoriteClicked(product())"
      >
        <mat-icon>
        {{ isInWishlist() ? 'favorite' : 'favorite_border' }}
      </mat-icon>
      </button>
      <div class="p-5 flex flex-col flex-1">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">
          {{product().name }}
        </h3>
        <p class="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
          {{ product().description }}
        </p>

        <div class="text-sm font-medium mb-4">
          {{ product().inStock ? "Em estoque" : "Sem estoque" }}
        </div>

        <div class="flex items-center justify-between mt-auto">
          <span class="text-2xl font-bold text-gray-900"> {{ product().price }}</span>
          <button matButton="filled" class="flex items-center gap-2" (click)="addToCartClicked.emit(product())">
            <mat-icon>shopping_cart</mat-icon>
            Carrinho
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();

  addToCartClicked = output<Product>();

  store = inject(EcommerceStore);

  isInWishlist = computed(() => this.store.wishlistItems().find(p => p.id === this.product().id))

  favoriteClicked(product: Product) {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(product)
    } else {
      this.store.addToWishlist(product);
    }
  }

}
