import { Component, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';

@Component({
  selector: 'app-essai1',
  templateUrl: './essai1.component.html',
  styleUrls: ['./essai1.component.css']
})
export class Essai1Component extends BaseComponent {

  override cname: string = 'PARCELLAIRE'

}
