import { Injectable } from '@angular/core';
import { promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotionS";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id:string): Promise<promotion>{
    return Promise.resolve(PROMOTIONS.filter(promo=>promo.id===id)[0]);
  }

  getFeaturedPromotion():Promise<promotion>{
    return Promise.resolve(PROMOTIONS.filter(promo=>promo.featured)[0]);
  }

}
