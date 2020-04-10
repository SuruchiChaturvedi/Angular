import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { dishes } from "../shared/dishes";

@Injectable({
  providedIn: "root"
})
export class DishService {
  constructor() {}

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(dishes);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(dishes.filter(dish => {
      return dish.id == id;
    })[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(dishes.filter(dish => {
      return dish.featured;
    })[0]);
  }
}
