import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpandageComponent } from './components/epandage/epandage.component';

const routes: Routes = [
  {path: '', component: EpandageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
