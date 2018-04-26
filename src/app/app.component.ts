import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Order } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService]
})
export class AppComponent  {
  title = 'app';
  currentInstance :any;
  data:any;
  order: Order[];
  cart:any=[];
  
  constructor(private configService: ConfigService) {
    this.currentInstance = this;
    this.configService.getConfig().subscribe(
      data => {
        this.assignJson(data);
      }
    );
   
    
  
    let name:string='vishal';
    let quantity:number= 2;
    //const newOrder  : Order = {name ,quantity} as Order;
    
    //this.configService.addHero(newOrder).subscribe(hero => this.order.push(hero));

  }

  assignJson(data: any) {
    this.data = data;
    console.log('data',this.data);
  }
  itemAddedToCart(e:Event){
    this.cart = e;
    console.log('e',e);
  }
}
