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

  ngOnInit() {
    this.chartInit();
  }

  chartInit() {
    const data = {
      labels: [
        "2015-01",
        "2015-02",
        "2015-03",
        "2015-04",
        "2015-05",
        "2015-06",
        "2015-07",
        "2015-08",
        "2015-09",
        "2015-10"
      ],
      datasets: [
        {
          label: "",
          data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)"
          ],
          borderWidth: 1
        }
      ]
    };
    const options = {
      responsive: true,
      title: {
        display: true,
        text: "Top 10 most category"
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };

    this.chart = new Chart(this.canvas.nativeElement.getContext("2d"), {
      type: "bar",
      data: data,
      options: options
    });
  }
}
