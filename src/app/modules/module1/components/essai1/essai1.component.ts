import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-essai1',
  templateUrl: './essai1.component.html',
  styleUrls: ['./essai1.component.css']
})
export class Essai1Component implements OnDestroy {
  ngOnDestroy(): void {
    console.log('PARCELLAIRE DESTROY');
  }

}
