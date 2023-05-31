import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('DASHBOARD DESTROY');
  }
}
