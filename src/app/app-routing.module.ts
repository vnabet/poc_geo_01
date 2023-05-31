import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
 { path: '', component: DashboardComponent},
 { path: 'parcellaire/:tab', pathMatch: 'prefix', loadChildren: () => import('./modules/module1/module1.module').then(m =>  m.Module1Module)},
 { path: 'interventions/:tab', pathMatch: 'prefix', loadChildren: () => import('./modules/module2/module2.module').then(m =>  m.Module2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
