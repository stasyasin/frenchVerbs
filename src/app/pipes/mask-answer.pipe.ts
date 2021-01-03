import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskAnswer'
})
export class MaskAnswerPipe implements PipeTransform {

  transform(value: string): string {
    let result = '';
    if (!value) {
      return result;
    }

    result = value;
    result = result.startsWith(`je`) ? result.split(`je`).join(`****`) : result;
    result = result.startsWith(`j'`) ? result.split(`j'`).join(`****`) : result;
    result = result.startsWith(`tu`) ? result.split(`tu`).join(`****`) : result;
    result = result.startsWith(`il`) ? result.split(`il`).join(`****`) : result;
    result = result.startsWith(`nous`) ? result.split(`nous`).join(`****`) : result;
    result = result.startsWith(`vous`) ? result.split(`vous`).join(`****`) : result;
    result = result.startsWith(`ils`) ? result.split(`ils`).join(`****`) : result;
    result = result.startsWith(`que je`) ? result.split(`que je`).join(`****`) : result;
    result = result.startsWith(`que j'`) ? result.split(`que j'`).join(`****`) : result;
    result = result.startsWith(`que tu`) ? result.split(`que tu`).join(`****`) : result;
    result = result.startsWith(`qu'il`) ? result.split(`qu'il`).join(`****`) : result;
    result = result.startsWith(`que nous`) ? result.split(`que nous`).join(`****`) : result;
    result = result.startsWith(`que vous`) ? result.split(`que vous`).join(`****`) : result;
    result = result.startsWith(`qu'ils`) ? result.split(`qu'ils`).join(`****`) : result;
    // que j'imageasse
    // que tu imageasses
    // qu'il imageât
    // que nous imageassions
    // que vous imageassiez
    // qu'ils imageassent

    return result;
  }

}
