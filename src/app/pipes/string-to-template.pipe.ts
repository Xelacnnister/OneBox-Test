import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToTemplate'
})
export class StringToTemplatePipe implements PipeTransform {

  transform(value: string): any {
    
    return `" + ${value } + "`;

  }

}
