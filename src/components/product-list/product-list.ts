import { Component, inject, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../common/interfaces/IProduct';
import { products } from '../../data/products';
import { ProductService } from '../../services/products';
import { CartService } from '../../services/cart-service';

@Component({
  // component Directive
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  allProducts!: IProduct[];

  // 21 //1
  // productService = inject(ProductService);
  // cartService = inject(CartService);
  //2
  constructor(
    public productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();
  }

  // addProductTocart(product: IProduct) {
  //   console.log(`product from child is `, product);
  // }

  addProduct() {
    this.cartService.addTocart();
  }
}
