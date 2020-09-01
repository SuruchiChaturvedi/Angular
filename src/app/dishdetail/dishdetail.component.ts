import { Component, OnInit} from "@angular/core";
import { Dish } from "../shared/dish";
import {Params, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../service/dish.service";
import {switchMap} from 'rxjs/operators';
@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"]
})
export class DishdetailComponent implements OnInit {
  
  selectedDish:Dish;
  dishIds:string [];
  prev:string;
  next:string;

  constructor(private route:ActivatedRoute, private dishService:DishService, private location:Location) {}

  ngOnInit() {

    this.dishService.getDishIds().subscribe(dishIds=>this.dishIds=dishIds);
    this.route.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params['id'])))
   .subscribe(selectedDish => {this.selectedDish=selectedDish; this.setPrevNext(selectedDish.id);});
    
  }

  setPrevNext(selectedDishId){

    const index=this.dishIds.indexOf(selectedDishId);
    this.prev=this.dishIds[(this.dishIds.length+index-1)%this.dishIds.length];
    this.next=this.dishIds[(this.dishIds.length+index+1)%this.dishIds.length];
  }

  goBack():void{
    return this.location.back();
  }
}
