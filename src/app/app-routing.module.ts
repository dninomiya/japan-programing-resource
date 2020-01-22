import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'schools'
  },
  {
    path: 'schools',
    loadChildren: () => import('./school/school.module').then(m => m.SchoolModule),
  },
  {
    path: 'materials',
    loadChildren: () => import('./material/material.module').then(m => m.MaterialModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
