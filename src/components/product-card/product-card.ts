import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../common/interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: IProduct;

  @Output() myEvent = new EventEmitter<IProduct>();

  addProduct() {
    this.myEvent.emit(this.product);
  }
}
