import { Component, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component extends BaseComponent {

  override cname: string = 'INTERVENTIONS';

}
