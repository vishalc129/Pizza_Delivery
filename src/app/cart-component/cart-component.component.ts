import { Component, OnInit } from '@angular/core';
import {sharedService} from '../shared/shared.service';
import {ActivatedRoute,Router} from "@angular/router";
import { ConfigService } from '../config.service';
import { Order } from '../order';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent   {

  ;
  cart;
  public firstname: string;
    public lastname: string;
  order: Order[];
  public userName:string;
  mobileNo:number;
  userAddress:string;

  constructor(  private router: Router,private configService: ConfigService,private sharedService: sharedService,private route: ActivatedRoute) {
    
     this.sharedService.getEmittedValue().subscribe((item: any) => { 
      this.cart = item; 
    ;});
    
   } 
  
  confirmOrder(){
    let userName  = this.userName;
    let mobileNo = this.mobileNo ;
    let userAddress = this.userAddress ;
    let pizzaArray = [];
    let OrderedPizzas: string;
    let orderTotal :number =0;
    for (let entry of this.cart) {
      pizzaArray.push(entry.name);
      orderTotal=orderTotal+entry.price;
    }
    OrderedPizzas =pizzaArray.toString();

    console.log('userName',userName,'mobileNo',mobileNo,'userAddress',userAddress);    
    console.log('pizzaname',OrderedPizzas,'orderTotal',orderTotal);

    let name:string='vishal';
    let quantity:number= 2;
    const newOrder  : Order = {userName ,mobileNo,userAddress,OrderedPizzas,orderTotal} as Order;
    
    this.configService.addHero(newOrder).subscribe(hero => this.order.push(hero));
     document.getElementById("cartText").innerHTML = "Cart";
    this.router.navigate(['/orderPlaced']);
  }
}
