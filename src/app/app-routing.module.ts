import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    //Always leave this route at the end.
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
