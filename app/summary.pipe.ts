import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'summary' })

export class SummaryPipe implements PipeTransform {
  // if this args has a number, then 50 is default
  transform(value: string, args: string[]) {
    var limit = (args && args[0]) ? parseInt(args[0]) : 50 ;
    
    if (value) {
      return value.substring(0, limit) + "...";
    }
  }
}