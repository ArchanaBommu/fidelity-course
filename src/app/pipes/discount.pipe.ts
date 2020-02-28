import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: number,  duration: number): number {
    if(duration>=28)
      return price-price*0.12;
    else if(duration>=24)
      return price-price*0.10;
    else if(duration>=14)
      return price-price*0.08;
    else
      return price-price*0.05;
    
  }

}
