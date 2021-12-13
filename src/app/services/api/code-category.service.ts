import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CodeCategoryModel } from '../../model/codecategory.model';
import { ServerService } from '../server.service';

@Injectable()
export class CodeCategoryService {

  constructor(
    private server: ServerService,
  ) {
  }

  private _currentCodeCategory = new BehaviorSubject<string>("all");
  private _allCategories = new BehaviorSubject<CodeCategoryModel[]>([]);


  get currentCodeCategory() {
    return this._currentCodeCategory.asObservable();
  }

  get allCategories() {
    return this._allCategories.asObservable();
  }

  setCurrentCategory(category: string) {
    this._currentCodeCategory.next(category);
  }

  create(name: string) {
    return this.server.request('POST', 'codecategory', { "Name": name }, true)
      .subscribe((response: any) => {
        const currentCategories = this._allCategories.getValue();
        let categories = [...currentCategories, new CodeCategoryModel(response.name, response.id)];
        this._allCategories.next(categories);
      });
  }

  delete(id:string) {
    return this.server.request('DELETE', `codecategory/${id}`, {}, true)
      .subscribe((response: any) => {
        const currentCategories = this._allCategories.getValue();
        let categories = currentCategories.filter(i => i.Id != id);
        this._allCategories.next(categories);
      });
  }

  public getAll(isForce: boolean = false): void {
    var currentValues = this._allCategories.getValue();
    if (currentValues.length == 0 || isForce) {      
    this.server.request('GET', 'codecategory', {}, true)
      .subscribe((response: any) => {
        if (response && Array.isArray(response)) {
          let codeCategories: CodeCategoryModel[] = [];
          codeCategories = response.map(item => new CodeCategoryModel(item.name, item.id));
          this._allCategories.next(codeCategories);
        }
      });
    }
  }
}