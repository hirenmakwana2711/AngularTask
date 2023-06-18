import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateConvert',
})
export class DateConvertPipe implements PipeTransform {
  transform(value: string, format: string): unknown {
    const date = new Date(value);
    const datePipe = new DatePipe('en-US');

    return datePipe.transform(date, format);
  }
}
