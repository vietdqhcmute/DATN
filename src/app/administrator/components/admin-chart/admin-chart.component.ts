import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-admin-chart",
  templateUrl: "./admin-chart.component.html",
  styleUrls: ["./admin-chart.component.scss"]
})
export class AdminChartComponent implements OnInit {
  @ViewChild("canvas") canvas: ElementRef;
  title = "Dash board";
  chart: any = [];

  constructor() {}

  ngOnInit() {}

  chartInit() {
    const data = {};
    const options = {};
    this.chart = new Chart(this.canvas.nativeElement.getContext("2d"), {
      type: "bar",
      data: data,
      options: options
    });
  }
}
