import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { dishes } from "../shared/dishes";

@Injectable({
  providedIn: "root"
})
export class DishService {
  constructor() {}

  getDishes(): Promise<Dish[]> {
  //Simulate Server latency with 2 seconds delay  
  return new Promise (resolve=>
                  setTimeout(()=>{
                  resolve(dishes);
            },2000));
  }

  getDish(id:string): Promise<Dish>{
  //Simulate Server latency with 2 seconds delay
  return new Promise(resolve=>
                setTimeout(()=>{
                resolve(dishes.filter(dish=>dish.id===id)[0]);
              },2000));
  }

  getFeaturedDish():Promise<Dish>{
  //Simulate Server latency with 2 seconds delay
  return new Promise(resolve=>
      setTimeout(()=>{
        resolve(dishes.filter(dish=>dish.featured)[0]);
    },2000));
    
  }
}
