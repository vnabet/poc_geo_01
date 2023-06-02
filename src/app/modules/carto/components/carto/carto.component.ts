import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CartoService } from '../../services/carto.service';
import { BaseComponent } from 'src/app/core/base/base.component';
import { LogsService } from 'src/app/modules/services/logs.service';

@Component({
  selector: 'app-carto',
  templateUrl: './carto.component.html',
  styleUrls: ['./carto.component.css']
})
export class CartoComponent extends BaseComponent implements AfterViewInit, OnDestroy{

  override cname: string = 'CARTO';

  @ViewChild('cartoDiv') cartoDiv!:ElementRef;

  constructor(private cartoService:CartoService, logsService:LogsService) {
    super(logsService)
  }

  ngAfterViewInit(): void {
      this.cartoService.inject(this.cartoDiv);
  }

  override ngOnDestroy(): void {
      this.cartoService.remove();
  }


}
