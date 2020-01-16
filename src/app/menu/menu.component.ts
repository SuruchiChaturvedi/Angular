import { Component, OnInit } from "@angular/core";
import { Dish } from "../shared/dish";
import { dishes } from "../shared/dishes";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = dishes;
  selectedDish: Dish;
  constructor() {}

  ngOnInit() {}

  onSelect(dish) {
    this.selectedDish = dish;
  }
}
