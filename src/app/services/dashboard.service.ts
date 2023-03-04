import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  tableData: any[] = [
    {
      id: '7f2b5cae-07e0-4854-8378-70ad5277f18e',
      name: 'Jhonatan Costa',
      age: 25,
      email: 'jhonatan@test.com',
      phone: '99999-9999',
      country: 'Brazil',
      role: 'admin',
      profession: 'Systems analyst',
      status: 'Active',
      createdAt: '2022-07-20 15:45:26.708-03',
      lastUpdateAt: '2022-08-11 12:42:41.252-03'
    },
    {
      id: 'dc135e6c-647f-4974-8abb-ae38984c2336',
      name: 'Ellie Williams',
      age: 19,
      email: 'ellie@test.com',
      phone: '99999-9999',
      country: 'United States',
      role: 'user',
      profession: 'Student',
      status: 'Inactive',
      createdAt: '2022-03-20 15:45:26.708-03',
      lastUpdateAt: '2022-05-11 12:42:41.252-03'
    },
    {
      id: 'dfd3c8ee-c216-4789-97dc-84250f932e70',
      name: 'Jackson Tormes',
      age: 25,
      email: 'jackson@test.com',
      phone: '99999-9999',
      country: 'Brazil',
      role: 'user',
      profession: 'Forklift operator',
      status: 'Active',
      createdAt: '2022-04-20 15:45:26.708-03',
      lastUpdateAt: '2022-06-11 12:42:41.252-03'
    }
  ];

  getAllUsers(): Observable<Array<User>> {
    return of(
      this.tableData.map(item => new User(
        item.name,
        item.age,
        item.email,
        item.phone,
        item.country,
        item.profession,
        item.status,
      ))
    );
  }

}
