import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { CartoModule } from '../carto/carto.module';


@NgModule({
  declarations: [
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [
    CommonModule,
    Module2RoutingModule,
    CartoModule
  ]
})
export class Module2Module { }
