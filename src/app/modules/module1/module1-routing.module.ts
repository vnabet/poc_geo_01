import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Essai1Component } from './components/essai1/essai1.component';

const routes: Routes = [
  {path: '', component: Essai1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
