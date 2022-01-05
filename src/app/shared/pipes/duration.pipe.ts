import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minutes: string): string {
    return +minutes < 60 ? `${minutes} min` : `${(+minutes / 60).toFixed()}h ${+minutes % 60} min`;
  }
}
