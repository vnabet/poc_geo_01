import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnDestroy {
  ngOnDestroy(): void {
    console.log('INTERVENTIONS DESTROY');
  }

}
