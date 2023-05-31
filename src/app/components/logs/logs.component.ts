import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LogsService } from 'src/app/modules/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {

  logs:Observable<string[]> = this.logsService.logs;
  constructor(private logsService:LogsService) {

  }

}
