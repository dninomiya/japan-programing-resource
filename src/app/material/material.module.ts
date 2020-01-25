import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialDetailComponent } from './material-detail/material-detail.component';


@NgModule({
  declarations: [MaterialListComponent, MaterialDetailComponent],
  imports: [
    MaterialRoutingModule,
    SharedModule
  ]
})
export class MaterialModule { }
