import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { CartoService } from 'src/app/modules/carto/services/carto.service';
import { LogsService } from 'src/app/modules/services/logs.service';

@Component({
  selector: 'app-epandage',
  templateUrl: './epandage.component.html',
  styleUrls: ['./epandage.component.css']
})
export class EpandageComponent extends BaseComponent implements AfterViewInit, OnDestroy {

  override cname: string = 'PLAN D\'EPANDAGE';

  constructor(private cartoService:CartoService, logsService:LogsService) {
    super(logsService);
  }

  ngAfterViewInit(): void {
      this.cartoService.showPIP();
  }

  override ngOnDestroy(): void {
      this.cartoService.hidePIP();
  }

}
