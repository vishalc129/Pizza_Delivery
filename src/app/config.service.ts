import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Order } from './order';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ConfigService {
  configUrl = '../assets/data/server.json';
  
  orderConfigUrl = 'http://localhost:3000/order';
  constructor(private http: HttpClient) { }

  getConfig() {
  console.log('configUrl',this.configUrl); 
    
    return this.http.get(this.configUrl);
  }
    /** POST: add a new hero to the database */
    addHero (order: Order): Observable<Order> {
      return this.http.post<Order>(this.orderConfigUrl,order, httpOptions);
        
    }
 

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/