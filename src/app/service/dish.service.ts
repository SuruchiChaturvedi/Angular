import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { dishes } from "../shared/dishes";

@Injectable({
  providedIn: "root"
})
export class DishService {
  constructor() {}

  getDishes(): Dish[] {
    return dishes;
  }

  getDish(id: string): Dish {
    return dishes.filter(dish => {
      return dish.id == id;
    })[0];
  }

  getFeaturedDish(): Dish {
    return dishes.filter(dish => {
      return dish.featured;
    })[0];
  }
}
