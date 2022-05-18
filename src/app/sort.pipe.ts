import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    value.sort((a:any, b:any) => a.name.localeCompare(b.name))
    return value;
  }

}
