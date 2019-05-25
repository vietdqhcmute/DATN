import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convertToMonth"
})
export class ConvertToMonthPipe implements PipeTransform {
  month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  transform(value: number): string {
    return value.toString().replace(value.toString(), this.month[+value-1]);
  }
}
