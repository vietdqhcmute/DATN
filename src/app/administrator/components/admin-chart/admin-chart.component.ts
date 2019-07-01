import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { TagService } from "src/app/services/tag.service";

@Component({
  selector: "app-admin-chart",
  templateUrl: "./admin-chart.component.html",
  styleUrls: ["./admin-chart.component.scss"]
})
export class AdminChartComponent implements OnInit {
  @ViewChild("canvas") canvas: ElementRef;
  title = "Dash board";
  chart: any = [];
  data: any[] = [];
  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.dataInit();
  }

  dataInit() {
    this.tagService.getTop10TagArticle().subscribe(data => {
      const tagDataList = this.mapTagData(data);
      const tagContentList = this.mapTagContent(data);
      this.chartInit(tagContentList, tagDataList);
    });
  }

  mapTagData(data) {
    const list = data.map(e => {
      return e.articles_count;
    });
    return list;
  }
  mapTagContent(data: any[]) {
    const list = data.map(e => {
      return e._tag.content;
    });
    return list;
  }
  chartInit(labelList, dataList) {
    const data = {
      labels: labelList,
      datasets: [
        {
          label: "Job",
          data: dataList,
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
