import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeCategoryService } from 'src/app/services/common/code-category.service';
import { CodeService } from 'src/app/services/common/code.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'code-ss-code-catalog',
  templateUrl: './code-catalog.component.html',
  styleUrls: ['./code-catalog.component.scss']
})
export class CodeCatalogComponent implements OnInit {

  public searchCategory: string = "";
  public codeText: string = "";

  constructor(public codeCategoryService: CodeCategoryService,
    public codeService: CodeService,
    public router: Router) { }

  ngOnInit(): void {
    this.codeCategoryService.getAll();
    this.codeService.getAll();
    this.codeCategoryService.currentCodeCategory.subscribe(category => {
      if (category == "all") {
        this.router.navigate(['/main/code/catalog/all']);
      }
    });
  }

  public createNewCategory() {
    if (this.searchCategory.trim()) {
      this.codeCategoryService.create(this.searchCategory);
      this.searchCategory = "";
    }
  }

  public getCategories() {
    return this.codeCategoryService
      .allCategories
      .pipe(
        map(categories => categories
          .filter(value => this.searchCategory ?
            value.Name.toUpperCase().includes(this.searchCategory.toUpperCase()) : true)));
  }

  public deleteCategory(id) {
    event.stopPropagation();
    this.codeCategoryService.delete(id);
    this.codeCategoryService.setCurrentCategory("all");
  }

  public getAllCode(currentCategoryId) {
    return this.codeService
      .allCode
      .pipe(
        map(codes => codes
          .filter(value => currentCategoryId == "all" ? true : value.Category.Id == currentCategoryId)));
  }

}
