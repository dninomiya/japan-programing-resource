import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';


@NgModule({
  declarations: [SchoolListComponent, SchoolDetailComponent],
  imports: [
    SharedModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
