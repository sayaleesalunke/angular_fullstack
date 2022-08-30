import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TickerResponse} from '@app/cot-update/tickerresponse.model';
import { CotService} from '@app/cot-update/cot.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cot-update',
  templateUrl: './cot-update.component.html'
})
export class CotUpdateComponent implements OnInit {

  tickerResponse:TickerResponse[];
  data ="Hello";
  stringObject: any;
  //data1=JSON.stringify(this.data);
  constructor( private http: HttpClient,private cotService:CotService) { }

  ngOnInit(): void {
    
    this.cotService.tickerData()
    .pipe(first())
    .subscribe({
        next: (data) => {
          this.stringObject=data;
          this.data=JSON.stringify(data);
            console.log(data);
           
        },
        error: error => {
           
        }
    });
    //(this.http.get("https://api.tickertape.in/stocks/financials/cashflow/MNGL/annual/normal?count=10")).subscribe(data => this.data = data);
  }

}
