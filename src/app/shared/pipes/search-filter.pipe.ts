import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchStr: string): any[] {
    if (searchStr=='')
      return items;
    else{
      let filteredItems = items.filter((item)=>
        (item.surname.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)||
        (item.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)||(
        (item.phone_number.replace(/\D/g,'').indexOf(searchStr.replace(/\D/g,'')) !== -1))&&
        (searchStr.replace(/\D/g,'')!==''))
        //Для номера необходимо двойное условие, поскольку иначе, при проверке имени или фамилии, начинают сравниваться 2 пустые строки и таблица выводится полностью.
      return filteredItems;
    }
  }

}
