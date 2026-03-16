import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { ProductCard } from '../../components/product-card/product-card';
import { Component, signal, inject, input, effect } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatNavList, MatListItem } from '@angular/material/list'
import { EcommerceStore } from '../../../ecommerce-store';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [
    ProductCard, 
    MatSidenavContainer, 
    MatSidenavContent, 
    MatSidenav, 
    MatNavList,
    MatListItem,
    RouterLink,
    TitleCasePipe,
  ],
  template: `
    <mat-sidenav-container class="h-full">
      <mat-sidenav mode="side" opened="true">
        <div class="p-6">
          <h2 class="text-lg text-gray-900">Categorias</h2>

          <mat-nav-list>
            @for (cat of categories(); track cat) {
              <mat-list-item 
                [activated]=" 
                cat === category()" 
                class="my-2" 
                [routerLink]="['/products', cat]"
              >
                <span class="font-medium" [class]="cat === category() ? '!text-white': null">
                  {{ cat | titlecase }}
                </span>
              </mat-list-item>
            }
          </mat-nav-list>
          
        </div>
      </mat-sidenav>
      <mat-sidenav-content class="bg-gray-100 p-6 h-full">
        <h1 class="text-2xl font-bold text-gray-900 mb-6">{{ category() | titlecase }}</h1>
        <p class="text-base text-gray-600 mb-6">{{ store.filteredProducts().length }} produtos</p>
          <div class="responsive-grid min-h-[700px]">
            @for (product of store.filteredProducts(); track product.id) {
              <app-product-card [product]="product" />
            }
          </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export default class ProductsGrid {
  private route = inject(ActivatedRoute);

  category = input('all');
  store = inject(EcommerceStore)

  constructor() {
    // this.route.params.subscribe(params => {
    //   this.category.set(params['category'] ?? 'all');
    // });
    
    effect(() => {
      this.store.setCategory(this.category());
  });
  }

  categories = signal<string[]>(['all', 'electronics', 'clothing', 'accessories', 'home', ])
}