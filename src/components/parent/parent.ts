import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent  implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent on changes');
    
  }
  h1content = 'hello from h1';
  selectedProduct = {
    id: 1,
    title: 'Laptop',
  };

  changeProduct() {
    this.selectedProduct = {
      id: 2,
      title: 'IPhone',
    };
  }
  changeH1() {
    this.h1content = 'hello againg after change';
  }
}
