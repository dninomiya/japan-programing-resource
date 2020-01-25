import { MaterialService } from './../../services/material.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  material$ = this.route.paramMap.pipe(
    map(param => this.materialService.getMaterial(param.get('id')))
  );

  constructor(
    private route: ActivatedRoute,
    private materialService: MaterialService
  ) { }

  ngOnInit() { }

}
