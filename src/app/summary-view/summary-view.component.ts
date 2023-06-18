import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/data.json';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css'],
})
export class SummaryViewComponent implements OnInit {
  data: any;
  tableData: any;
  jsonData: any = jsonData;

  constructor() {}

  ngOnInit(): void {
    this.data = jsonData;
    this.tableData = jsonData?.Datas;
  }

  get labels() {
    const properties = this.data?.Datas?.flatMap((d: any) => d?.Properties);
    return [...new Set(properties?.map((prop: any) => prop?.Label))];
  }

  getProperty(properties: any, label: any) {
    const property = properties?.find((prop: any) => prop?.Label === label);
    return property ? property.Value : '';
  }
}
