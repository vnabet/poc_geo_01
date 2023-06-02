import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {filter} from 'rxjs'
import { LogsService } from './modules/services/logs.service';
import { BaseComponent } from './core/base/base.component';

// declare var Module: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  links:{label:string, route?:string, tab?:null|number, module:string}[] = [
    {label: 'Dashboard', module: '', tab: null},
    {label: 'Parcellaire', module: 'parcellaire'},
    {label: 'Interventions', module: 'interventions'},
  ]
  activeLink = this.links[0].route;

  private _tabIndex:number = 0;

  override cname: string = 'APP';

  // private mapInterval:any;
  // private map:any;

  constructor(private router: Router, logsService:LogsService) {
    super(logsService);

    //On reconstruit les routes des liens en fonction du module et de l'index de l'onglet
    this.links.forEach((l) => {
      if(l.tab !== null) {
        this._tabIndex++;
        l.tab = this._tabIndex;
        l.route = `/${l.module}/t${l.tab}`;
      } else {
        l.route = `/${l.module}`;
      }
    })


    this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe(event => {
      const route:string = (<NavigationStart>event).url;
      const regex:RegExp = /\/t(\d+)/;
      const regexArr:RegExpExecArray|null = regex.exec(route);

      if(regexArr) {
        const tab = this.links.find((l) => l.tab == regexArr.at(1));
        if(tab && tab.route !== route) tab.route = route;
      }

      this.logsService.send(`route ${route}`)
      this.activeLink = route;
    });

  }


  override ngOnInit(): void {
      super.ngOnInit();

      // this.mapInterval = setInterval(() => {
      //   if(Module && Module.MapControl) {
      //     clearInterval(this.mapInterval);
      //     this.map = new Module.MapControl("carto");
      //   }
      // },500)
  }

  addTab(label:string, module:string) {
    this._tabIndex++;
    let link = {
      label,
      route: `${module}/t${this._tabIndex}`,
      module,
      tab: this._tabIndex
    }

    this.links = [...this.links, link];

    this.router.navigateByUrl(link.route);
  }
}
