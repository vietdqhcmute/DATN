import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "emailFilter",
  pure: false // this maybe bad behavior (trigger every change of data)
})
export class EmailFiterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === "") {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      //   if (item[propName] === filterString) {
      //     resultArray.push(item);
      //   }
      if (item[propName].includes(filterString) ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
