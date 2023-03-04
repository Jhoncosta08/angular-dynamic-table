import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CsvDownloadComponent} from './csv-download.component';

@NgModule({
  declarations: [
    CsvDownloadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CsvDownloadComponent
  ]
})
export class CsvDownloadModule { }
