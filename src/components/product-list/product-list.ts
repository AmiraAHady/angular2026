import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { FormsModule } from '@angular/forms';

@Component({
  // component Directive
  selector: 'app-product-list',
  imports: [ProductCard,FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  searchValue: string = 'omar';
}
