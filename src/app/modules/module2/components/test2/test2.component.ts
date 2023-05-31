import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component extends BaseComponent {

  override cname: string = 'INTERVENTIONS DETAIL';

}
