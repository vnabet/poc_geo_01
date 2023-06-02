import { LogsService } from './../../services/logs.service';
import { ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var Module: any;

@Injectable({
  providedIn: 'root'
})
export class CartoService {

  private canvas:HTMLCanvasElement;
  private pip:HTMLElement;

  private mapInterval:any;
  private map:any;

  constructor( @Inject(DOCUMENT) document:Document, logsService:LogsService) {
    this.pip = document.createElement('div');
    this.pip.style.width = '150px';
    this.pip.style.height = '150px';
    this.pip.style.position = 'absolute';
    this.pip.style.zIndex = '99';
    this.pip.style.margin = '20px';
    this.pip.style.bottom = '0';
    this.pip.style.right = '0';
    this.pip.style.border = '4px solid blue';
    this.pip.style.overflow = 'hidden'
    this.pip.style.borderRadius = '20px'
    this.pip.style.visibility = 'hidden';

    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'relative';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.id = 'carto-canvas';
    this.pip.appendChild(this.canvas);
    document.body.appendChild(this.pip);


    this.mapInterval = setInterval(() => {
        if(Module && Module.MapControl) {
          clearInterval(this.mapInterval);
          this.map = new Module.MapControl('carto-canvas');
          logsService.send('WEBASSEMBLY CARTO');
        }
      },500)
  }

  inject(element:ElementRef) {

    (element.nativeElement as HTMLElement).appendChild(this.canvas);

  }

  remove() {
    this.pip.appendChild(this.canvas);
  }

  showPIP() {
    this.pip.style.visibility = 'visible';
  }

  hidePIP() {
    this.pip.style.visibility = 'hidden'
  }
}
