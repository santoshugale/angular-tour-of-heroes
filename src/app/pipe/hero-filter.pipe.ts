import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

  public transform(value: Hero[], age: number): any {
    if (!value)
      return [];
    if (!age)
      return value;
    return value.filter((hero: Hero) => {
      return hero.age >= age;
    })
  }

}
