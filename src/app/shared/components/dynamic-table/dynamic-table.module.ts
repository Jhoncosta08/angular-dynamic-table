import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table.component';
import {TableSortDirective} from '../../directives/table-sort.directive';
import {FormsModule} from '@angular/forms';
import {CsvDownloadModule} from '../csv-download/csv-download.module';

@NgModule({
  declarations: [
    DynamicTableComponent,
    TableSortDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CsvDownloadModule
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule { }
