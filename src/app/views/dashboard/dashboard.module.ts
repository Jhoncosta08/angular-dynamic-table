import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DynamicTableModule} from '../../shared/components/dynamic-table/dynamic-table.module';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DynamicTableModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
