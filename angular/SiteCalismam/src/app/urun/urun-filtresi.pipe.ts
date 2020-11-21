import { Pipe, PipeTransform } from '@angular/core';
import { Urun } from './urun';

@Pipe({
  name: 'urunFiltresi'
})
export class UrunFiltresiPipe implements PipeTransform {
  transform(value: Urun[],urunBulucu?: string):Urun[] {
    urunBulucu=urunBulucu?urunBulucu.toLocaleLowerCase():null
    
    return urunBulucu?value.filter((p:Urun)=>p.urunIsim
    .toLocaleLowerCase().indexOf(urunBulucu)!==-1):value;
  }
  
  


  

}
