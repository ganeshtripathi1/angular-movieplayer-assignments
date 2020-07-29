import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe',
})
export class CustomepipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);

    let data: any = value;

    let converted_data: string = data.toUpperCase();

    return converted_data;
  }
}
