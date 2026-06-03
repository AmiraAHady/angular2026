import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  productTitle: string = 'Samgung TV';
  productPrice: number = 1000;
  outOfStock: boolean = false;
  productImg: string =
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTt58ePs-sNU-B6pXyQz5k1CU9-5oGEguxWndL96tNJTsLyEMc2daDriWhkbfk0h1ADiFVhh-CUCtIUWj9yZOPKqYY_mLVHxi4MxVzFJic2B0nkHb_v5l6U9hgcvTH0JURdEKaBPS2l62E&usqp=CAc';

  handleclick() {
    alert('H5 Clicked');
  }
  addToCart(title:string,price:number) {
    console.log(title,price);
  }
}
