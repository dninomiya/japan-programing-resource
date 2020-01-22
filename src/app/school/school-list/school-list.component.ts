import { SchoolService } from './../../services/school.service';
import { School } from './../../interfaces/school';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  schools: School[] = this.schoolService.getSchools();
  form = this.fb.group({
    places: [[]],
    skills: [[]],
    types: [[]],
    plans: [[]],
  });

  constructor(
    private schoolService: SchoolService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setFilter();

    this.form.valueChanges.subscribe(value => {
      this.updateURL(value);
      this.schools = this.schoolService.getSchools(value);
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
