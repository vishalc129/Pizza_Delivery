import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponentComponent }   from './cart-component/cart-component.component';
import { OrderPlacedComponent }   from './order-placed/order-placed.component';
import { WorkmatComponentComponent }      from './workmat-component/workmat-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cart', component: CartComponentComponent },
  { path: 'dashboard', component: WorkmatComponentComponent },
  { path: 'orderPlaced', component: OrderPlacedComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/