import { Component, computed, signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../utils/data-mock';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  template: `
    <div class="bg-gray-100 p-6">
      <h1 class="text-2xl font-bold text-gray-900">{{ category() }}</h1>

      <div class="responsive-grid">
        @for (product of filteredProducts(); track product.id) {
          <div class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <img [src]="product.imageUrl" class="w-full h-[300px] object-cover rounded-t-xl" />

            <div class="p-5 flex flex-col flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {{product.name }}
              </h3>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export default class ProductsGrid {
  private route = inject(ActivatedRoute);
  category = signal('all');

  constructor() {
    this.route.params.subscribe(params => {
      this.category.set(params['category'] ?? 'all');
    });
  }

  products = signal<Product[]>(PRODUCTS);

  filteredProducts = computed(() =>
    this.category() === 'all'
      ? this.products()
      : this.products().filter(p => p.category === this.category().toLowerCase())
  );
}