import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogsService } from 'src/app/modules/services/logs.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnDestroy, OnInit {

  cname:string = 'BASE';
  protected logsService:LogsService;

  constructor(logsService:LogsService) {
    this.logsService = logsService;

  }
  ngOnDestroy(): void {
    this.logsService.send(`${this.cname} destroy`);
  }

  ngOnInit(): void {
    this.logsService.send(`${this.cname} init`);
  }

}
