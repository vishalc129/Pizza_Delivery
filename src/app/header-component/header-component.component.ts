import { Component, OnInit,Input } from '@angular/core';
import {WorkmatComponentComponent} from '../workmat-component/workmat-component.component'
import {  Router, ActivatedRoute, Params,NavigationExtras } from '@angular/router';
import {sharedService} from '../shared/shared.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  @Input() open: any;
  @Input() parentInstance: any;
   cart:any
   subscription;
  cartLength:number;
  ss;
  constructor(  private router: Router , ss: sharedService, public routes: ActivatedRoute,) {
    this.ss = ss;

   } 
 
  ngOnInit() {
    this.subscription = this.ss.getEmittedValue().subscribe((item: any) => { this.cart = item;this.clearAllClick();});
   
  }
  ngAfterContentChecked(){
    
  }
  clearAllClick(){
    
    this.cartLength = this.cart.length;
  }
  addToCart(){
    console.log('this.cart',this.cart);
    this.ss.change(this.cart);
    document.getElementById("cartText").innerHTML = "Click To Confirm Order";
    document.getElementById("cartText").style.width = "200px";
    document.getElementById("cartText").style.background = "yellowgreen";
    
  }
}
