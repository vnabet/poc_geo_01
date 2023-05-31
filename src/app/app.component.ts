import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {filter} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    {label: 'Dashboard', url: '/'},
    {label: 'Parcellaire', url: '/parcellaire/1'},
    {label: 'Interventions', url: '/interventions/2'},
  ]
  activeLink = this.links[0].url;

  constructor(private router: Router) {


    this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe(event => {
      console.log('ROUTE', (<NavigationStart>event).url)
      this.activeLink = (<NavigationStart>event).url;
    });
  }

  addTab(label:string, url:string) {
    let link = {
      label,
      url: `${url}/${this.links.length}`
    }

    this.links = [...this.links, link];

    console.log(this.links)

    this.router.navigateByUrl(link.url);
  }
}
