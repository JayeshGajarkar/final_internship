import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
  standalone: false,
  pure:false
})
export class DoublePipe implements PipeTransform {

  transform(array:number[]): number[] {
    
    return array.map(ele=>ele*2);
    
  }

}
