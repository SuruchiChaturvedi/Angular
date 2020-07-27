import { Component, OnInit} from "@angular/core";
import { Dish } from "../shared/dish";
import {Params, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../service/dish.service";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishdetailComponent implements OnInit {
  
  selectedDish:Dish;
  constructor(private route:ActivatedRoute, private dishService:DishService, private location:Location) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.selectedDish=this.dishService.getDish(id);
  }

  goBack():void{
    return this.location.back();
  }
}
