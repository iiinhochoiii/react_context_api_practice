import { Cart } from './models/cart';

export interface Context {
  cart: Cart[];
  increase: (id: number) => void;
  decrease: (id: number) => void;
}
