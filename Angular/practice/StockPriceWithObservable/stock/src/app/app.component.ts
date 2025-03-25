import { Component, OnDestroy } from '@angular/core';
import { interval, map, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent{
  title = 'stock';
  stockPrice:number=0;
  

  getStockPrice():Observable<number>{
    return new Observable(observer=>{
      const price=(Math.random()*1000).toFixed(2);
      observer.next(parseFloat(price));
      observer.complete()
    }
    )
  }

  fetchStockPrice(){
    this.getStockPrice().subscribe(price=>{
      this.stockPrice=price;
      console.log("New sotck prices fetched",price);
    })
  }

  //2 
  private stockPriceSubject = new Subject<number>();
  latestPrice: number | null = null;
  latestPrice2: number | null = null;
  private subscription: Subscription | null = null;
  private subscription2: Subscription | null = null;


  private arr:Array<any>=[];

  // constructor() {
  //   interval(2000).pipe(map(() => (Math.random() * 1000).toFixed())).subscribe(price => {
  //     this.stockPriceSubject.next(parseFloat(price));
  //     console.log("New stock price", price);
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.subscription?.unsubscribe();
  // }

  // subscriptionToStockUpdate() {
  //   this.subscription = this.stockPriceSubject.subscribe(price => {
  //     this.latestPrice = price;
  //     console.log("Stock price updated to", price);
  //   });
  // }

  // unsubscribeToUpdate() {
  //   this.subscription?.unsubscribe();
  //   console.log("Unsubscribed to stock update");
  // }


}
