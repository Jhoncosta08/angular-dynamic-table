import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {DynamicTable} from '../models/dynamic-table.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicTableService {

  formatDataForTablePattern(data: any): Observable<any> {
    let tableHeaders: any[] = [];
    data.map((item: any): void => {
      Object.keys(item).map((keyValue: any): void => {
        if (!tableHeaders.includes(keyValue)) tableHeaders.push(keyValue);
      });
    });
    return of(new DynamicTable(tableHeaders, data));
  }
}
