import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CodeCategoryModel } from '../model/codecategory.model';
import { ServerService } from './server.service';

@Injectable()
export class CodeCategoryService {

  constructor(
    private server: ServerService,
  ) {
    this.getAll();
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
    return this.server.request('POST', 'codecategory', { "Name": name })
      .subscribe((response: any) => {
        const currentCategories = this._allCategories.getValue();
        let categories = [...currentCategories, new CodeCategoryModel(response.id, response.name)];
        this._allCategories.next(categories);
      });
  }

  private getAll() {
    return this.server.request('GET', 'codecategory')
      .subscribe((response: any) => {
        if (response && Array.isArray(response)) {
          let codeCategories: CodeCategoryModel[] = [];
          codeCategories = response.map(item => new CodeCategoryModel(item.id, item.name));

          this._allCategories.next(codeCategories);
        }
      });
  }
}