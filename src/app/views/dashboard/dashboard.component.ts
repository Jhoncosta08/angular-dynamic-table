import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersData: any[] = [];
  constructor(
    public dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getAllUsersList();
  }

  getAllUsersList() {
    this.dashboardService.getAllUsers().subscribe({
      next: response => {
        this.usersData = response;
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
