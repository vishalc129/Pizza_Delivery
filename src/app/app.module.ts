import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { WorkmatComponentComponent } from './workmat-component/workmat-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { AppRoutingModule } from './/app-routing.module';
import { sharedService } from './shared/shared.service';
import { OrderPlacedComponent } from './order-placed/order-placed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    WorkmatComponentComponent,
    CartComponentComponent,
    OrderPlacedComponent
  ],
  imports: [
    FormsModule, BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [sharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
