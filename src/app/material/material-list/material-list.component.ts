import { Material } from './../../interfaces/material';
import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {

  materials: Material[] = this.materialService.getMaterials();
  form = this.fb.group({
    licences: [[]],
    price: [[]],
    types: [[]],
  });

  constructor(
    private materialService: MaterialService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setFilter();

    this.form.valueChanges.subscribe(value => {
      this.updateURL(value);
      this.materials = this.materialService.getMaterials(value);
    });
  }

  private setFilter() {
    const data = {};
    const queryParams = this.route.snapshot.queryParams;

    Object.keys(queryParams).forEach(key => {
      data[key] = queryParams[key].split(',');
    });

    this.form.patchValue(data);
  }

  private updateURL(value) {
    const params = {};

    Object.keys(value).forEach(key => {
      const v = value[key];
      if (v && v.length) {
        params[key] = v.join(',');
      }
    });

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: params
      });
  }

}
