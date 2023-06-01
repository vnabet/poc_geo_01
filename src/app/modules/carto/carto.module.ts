import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartoComponent } from './components/carto/carto.component';



@NgModule({
  declarations: [
    CartoComponent
  ],
  exports: [
    CartoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartoModule { }
