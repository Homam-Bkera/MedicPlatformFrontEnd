import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLenght',
})
export class StringLenghtPipe implements PipeTransform {

  transform(string: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return string.length > limit ? string.substring(0, limit) + trail : string;

  }

}
