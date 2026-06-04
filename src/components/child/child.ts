import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges, OnInit,OnDestroy {
  
  @Input() myParentData: any;

  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside ngOnChanges in child');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit inside child');
  }


  ngOnDestroy(): void {
    // clean up
    console.log('inside ngOnDestroy!');
    
  }
}
