import { Component, OnInit } from '@angular/core';
import * as jspreadsheet from 'jspreadsheet-ce';

@Component({
  selector: 'app-excel-section',
  templateUrl: './excel-section.component.html',
  styleUrls: ['./excel-section.component.scss'],
})
export class ExcelSectionComponent implements OnInit {
  constructor() {}

  renderSpreadSheet(data: any) {
    console.log('DATA', data);
  }

  ngOnInit(): void {}
}
