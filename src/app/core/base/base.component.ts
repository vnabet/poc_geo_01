import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogsService } from 'src/app/modules/services/logs.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnDestroy, OnInit {

  cname:string = 'BASE';

  constructor(private logsService:LogsService) {

  }
  ngOnDestroy(): void {
    this.logsService.send(`${this.cname} destroy`);
  }

  ngOnInit(): void {
    this.logsService.send(`${this.cname} init`);
  }

}
