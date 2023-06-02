import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { EpandageComponent } from './components/epandage/epandage.component';
import { CartoModule } from '../carto/carto.module';


@NgModule({
  declarations: [
    EpandageComponent
  ],
  imports: [
    CommonModule,
    Module3RoutingModule,
    CartoModule
  ]
})
export class Module3Module { }
