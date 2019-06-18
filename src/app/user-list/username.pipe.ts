import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: any, term?: any): any {
    if (term == null) {
      return null;
  }
  return value.filter((item) => {
      return item.login.includes(term) ;
  });
  }

}
