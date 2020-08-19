import { Injectable } from '@angular/core';
import { promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotionS";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<promotion[]> {
    return new Promise ((resolve)=> setTimeout(()=>resolve(PROMOTIONS),2000));
  }

  getPromotion(id:string): Promise<promotion>{
    return new Promise ((resolve)=> setTimeout(()=>resolve(PROMOTIONS.filter(promo=>promo.id===id)[0]),2000));
  }

  getFeaturedPromotion():Promise<promotion>{
    return new Promise ((resolve)=> setTimeout(()=>resolve(PROMOTIONS.filter(promo=>promo.featured)[0]),2000));
  }

}
