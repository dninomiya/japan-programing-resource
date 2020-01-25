import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MaterialListComponent,
    children: [
      {
        path: ':id',
        component: MaterialDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
