import { Component, OnInit ,  Input,Output,EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';
import {sharedService} from '../shared/shared.service';
@Component({
  selector: 'app-workmat-component',
  templateUrl: './workmat-component.component.html',
  styleUrls: ['./workmat-component.component.css']
})
export class WorkmatComponentComponent  {

  @Input() parentInstance: any;
  @Output()cart:any =[];
  data :any;
  ourMenu:any ;
  /**
	 * Variable referencing shared service	 
	 */
	ss: any;
  
  @Output() open: EventEmitter<any> = new EventEmitter();
  constructor(ss: sharedService,private configService: ConfigService) {
    this.ss = ss;
    this.configService.getConfig().subscribe(
      data => {
        this.assignJson(data);
      }
    );
  }
  assignJson(data: any) {
    this.data = data.pizza; 
    this.ourMenu =data.pizza;
  }
  ngAfterContentChecked(){
    //	this.relativeUrl = document.getElementById("itoolcontainer").getAttribute("path");
    if(this.parentInstance != undefined ){
      this.ourMenu = this.parentInstance;
    }
  }
  addToCart(e:Event){
   
    this.cart.push(e)
    this.ss.change(this.cart);
    console.log('this.cart',this.cart);
  }
}
