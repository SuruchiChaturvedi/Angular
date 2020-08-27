import { Injectable } from '@angular/core';
import { promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotionS";
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id:string): Observable<promotion>{
    return of(PROMOTIONS.filter(promo=>promo.id===id)[0]).pipe(delay(2000));
  }

  getFeaturedPromotion():Observable<promotion>{
    return of(PROMOTIONS.filter(promo=>promo.featured)[0]).pipe(delay(2000));
  }

}
