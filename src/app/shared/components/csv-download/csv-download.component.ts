import {Component, Input} from '@angular/core';
import {ngxCsv} from 'ngx-csv';

@Component({
  selector: 'app-csv-download[dataToCsv][csvHeaders]',
  templateUrl: './csv-download.component.html',
  styleUrls: ['./csv-download.component.css']
})
export class CsvDownloadComponent {
  @Input() dataToCsv: any[] = [];
  @Input() csvHeaders: any[] = [];

  csvDownload(): void | ngxCsv {
    if(!this.dataToCsv || this.dataToCsv.length <= 0) return console.error('No data to download csv');
    let options = {
      fieldSeparator: ';',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useBom: true,
      headers: [...new Set(this.csvHeaders)]
    };
    return new ngxCsv(this.dataToCsv, 'tap-csv-report', options);
  }
}
