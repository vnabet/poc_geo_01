import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Essai1Component } from './components/essai1/essai1.component';
import { Essai2Component } from './components/essai2/essai2.component';


@NgModule({
  declarations: [
    Essai1Component,
    Essai2Component
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
