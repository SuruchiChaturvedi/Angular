import { Injectable } from '@angular/core';
import { promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotionS";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id:string): promotion{
    return PROMOTIONS.filter(promo=>promo.id===id)[0];
  }

  getFeaturedPromotion():promotion{
    return PROMOTIONS.filter(promo=>promo.featured)[0];
  }

}
