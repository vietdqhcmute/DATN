import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ResumeService {
  category = new Subject<string>();
  constructor() {}
  getCategory() {
    return this.category.asObservable();
  }
  setCategory(category: string) {
    this.category.next(category);
  }
}
