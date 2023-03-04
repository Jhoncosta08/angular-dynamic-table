import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DynamicTableService} from '../../../services/dynamic-table.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit, AfterViewInit {
  @Input() dynamicTableData: any;
  @Input() dynamicTableTitle: string = '';
  showSpinner: boolean = true;
  filteredTableData: any;
  searchInput: string = '';

  constructor(
    public dynamicTableService: DynamicTableService
  ) {}

  ngOnInit(): void {
    this.sendDataToFormat();
  }

  ngAfterViewInit(): void {
    if(this.dynamicTableData.tableHeaders) this.buildTableDataName();
  }

  sendDataToFormat(): void {
    if(this.dynamicTableData.length) {
      this.dynamicTableService.formatDataForTablePattern(this.dynamicTableData).subscribe({
        next: response => {
          this.dynamicTableData = response;
          this.filteredTableData = response.tableData;
        },
        error: error => {
          console.error(error);
        }
      });
    }
    this.showSpinner = false;
  }

  buildTableDataName(): void {
    this.dynamicTableData.tableHeaders.map((header: any) => {
      let header_id = document.getElementById(header);
      if(header_id) header_id!.setAttribute('data-name', `${header}`);
    })
  }

  filterTable(): undefined | any[] {
    if(!this.dynamicTableData.tableData.length) return;
    this.filteredTableData = [];
    if(this.searchInput === '') return this.filteredTableData = this.dynamicTableData.tableData;
    this.dynamicTableData.tableData.map((item: any) => {
      Object.keys(item).map((index: any) => {
        let formattedValue = item[index].toString().toLowerCase();
        if(formattedValue.includes(this.searchInput.toLowerCase()) && !this.filteredTableData.includes(item)) this.filteredTableData.push(item);
      });
    });
    return this.filteredTableData;
  }

}
