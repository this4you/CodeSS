import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeCategoryService } from 'src/app/services/code-category.service';

@Component({
  selector: 'code-ss-code-edit-subpage',
  templateUrl: './code-edit-subpage.component.html',
  styleUrls: ['./code-edit-subpage.component.scss']
})
export class CodeEditSubpageComponent implements OnInit {
  public searchCategory: string = "";

  constructor(
    public codeCategoryService: CodeCategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.codeCategoryService.currentCodeCategory.subscribe(category => {
      if (category == "all") {
        this.router.navigate(['/main/code/all']);
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
