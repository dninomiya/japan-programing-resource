import { SchoolService } from './../../services/school.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {

  school$ = this.route.paramMap.pipe(
    map(param => this.schoolService.getSchool(param.get('id')))
  );

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) { }

  ngOnInit() {
  }

}
