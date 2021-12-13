import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeCategoryService } from 'src/app/services/api/code-category.service';
import { CodeService } from 'src/app/services/api/code.service';

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

  public deleteCategory(id) {
    event.stopPropagation();
    this.codeCategoryService.delete(id);
    this.codeCategoryService.setCurrentCategory("all");
  }

}
