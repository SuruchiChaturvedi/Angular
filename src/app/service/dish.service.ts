import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { dishes } from "../shared/dishes";
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DishService {
  constructor() {}

  getDishes(): Observable<Dish[]> {
    //Simulate Server latency with 2 seconds delay  
    return of(dishes).pipe(delay(2000));
  }

  getDish(id:string): Observable<Dish>{
  //Simulate Server latency with 2 seconds delay
  return of(dishes.filter(dish=>dish.id===id)[0]).pipe(delay(2000));
  }

  getFeaturedDish():Observable<Dish>{
  //Simulate Server latency with 2 seconds delay
  return of(dishes.filter(dish=>dish.featured)[0]).pipe(delay(2000));  
  }
}
