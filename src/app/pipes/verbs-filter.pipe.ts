import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verbsFilter'
})
export class VerbsFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(items: string[], key: string): any[] {
    if (!items) {
      return [];
    }

    if (!key) {
      return items;
    }

    return items.filter((item) => item.toLowerCase().startsWith(key.toLowerCase()));
  }

}
