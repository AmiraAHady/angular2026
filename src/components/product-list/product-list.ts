import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../common/interfaces/IProduct';
import { products } from '../../data/products';

@Component({
  // component Directive
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  allProducts: IProduct[] = products;

  addProductTocart(product: IProduct) {
    console.log(`product from child is `, product);
  }
}
