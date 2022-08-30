
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CotService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
       
    }
    tickerData()
    {
      return this.http.get("https://api.tickertape.in/stocks/financials/cashflow/MNGL/annual/normal?count=10");
    }
  
}