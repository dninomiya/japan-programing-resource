import { SchoolFilter } from './../interfaces/school-filter';
import { SCHOOLS } from './../models/schools';
import { Injectable } from '@angular/core';
import { School } from '../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  getSchools(filter?: SchoolFilter): School[] {
    if (filter) {
      return SCHOOLS.filter(school => {
        const noMatch = Object.keys(filter).some(key => {
          return !this.filter(filter[key], school[key]);
        });
        return !noMatch;
      });
    } else {
      return SCHOOLS;
    }
  }

  getSchool(id: string): School {
    return SCHOOLS.find(school => school.id === id);
  }

  private filter(filterArray: [], targetArray: []): boolean {
    if (!filterArray || !filterArray.length || !targetArray.length) {
      return true;
    }

    const noMatch = filterArray.some(item => {
      return !targetArray.find(targetItem => item === targetItem);
    });

    return !noMatch;
  }
}
