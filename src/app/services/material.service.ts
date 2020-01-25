import { MATERIALS } from './../models/materials';
import { Material, MaterialFilter } from './../interfaces/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  getMaterials(filter?: MaterialFilter): Material[] {
    if (filter) {
      return MATERIALS.filter(school => {
        const noMatch = Object.keys(filter).some(key => {
          return !this.filter(filter[key], school[key]);
        });
        return !noMatch;
      });
    } else {
      return MATERIALS;
    }
  }

  getMaterial(id: string): Material {
    return MATERIALS.find(school => school.id === id);
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
