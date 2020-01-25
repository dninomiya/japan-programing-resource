import { RootGuard } from './root.guard';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SchoolListComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [RootGuard]
      },
      {
        path: ':id',
        component: SchoolDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
