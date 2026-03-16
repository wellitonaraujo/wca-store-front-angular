import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { PRODUCTS } from "./app/utils/data-mock";
import { Product } from "./app/models/product";
import { computed } from "@angular/core";

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
};

export const EcommerceStore = signalStore(
  {
    providedIn: "root",
  },

  withState<EcommerceState>({
    products: PRODUCTS,
    category: "all",
    wishlistItems: [],
  }),

  withComputed(({ category, products }) => ({
    filteredProducts: computed(() => {
      if (category() === "all") return products();
      return products().filter(
        (p) => p.category === category().toLowerCase()
      );
    }),
  })),

  withMethods((store) => ({
    setCategory: (category: string) => {
      patchState(store, { category });
    },
  }))
);