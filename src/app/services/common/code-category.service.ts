import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeCategoryModel } from '../../model/codecategory.model';
import { CodeCategoryApiService } from '../api/code-category-api.service';

@Injectable()
export class CodeCategoryService {

  constructor(
    private codeCategoryApiService: CodeCategoryApiService
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
    this.codeCategoryApiService.create(name)
      .subscribe((response: any) => {
        const currentCategories = this._allCategories.getValue();
        const categories = [...currentCategories, response];
        this._allCategories.next(categories);
      });
  }
  
  getCategoryById(id: string) {
    return this._allCategories.getValue().find(c => c.id === id);
  }

  getCurrentCategoryId() {
    return this._currentCodeCategory.getValue();
  }

  delete(id: string) {
    this.codeCategoryApiService.delete(id)
      .subscribe((response: any) => {
        const currentCategories = this._allCategories.getValue();
        let categories = currentCategories.filter(i => i.id != id);
        this._allCategories.next(categories);
      });
  }

  public getAll(isForce: boolean = false): void {
    var currentValues = this._allCategories.getValue();
    if (currentValues.length == 0 || isForce) {
      this.codeCategoryApiService.getAll()
        .subscribe((response: any) => {
          if (response && Array.isArray(response)) {
            this._allCategories.next(response);
          }
        });
    }
  }
}