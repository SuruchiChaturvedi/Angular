import { Component, OnInit } from '@angular/core';
import {Dish} from "../shared/dish";
import {DishService} from "../service/dish.service";
import {promotion} from "../shared/promotion";
import {PromotionService} from "../service/promotion.service";
import {Leader} from "../shared/leader";
import {LeaderService} from "../service/leader.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredDish:Dish;
  featuredPromotion:promotion;
  featuredLeader:Leader;

  constructor(private dishService:DishService, private promotionService:PromotionService, private LeaderService:LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe((featuredDish)=>{this.featuredDish=featuredDish;});
    this.promotionService.getFeaturedPromotion().subscribe((featuredPromotion)=>{this.featuredPromotion=featuredPromotion;});
    this.LeaderService.getFeaturedLeader().subscribe((featuredLeader)=>{this.featuredLeader=featuredLeader;});
  }

  
}
