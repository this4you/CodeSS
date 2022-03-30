import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CodeCategoryService } from 'src/app/services/common/code-category.service';

@Component({
    selector: 'code-ss-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
    public searchCategory: string = "";
    public codeText: string = "";

    constructor(
        public codeCategoryService: CodeCategoryService,
    ) { }

    ngOnInit(): void {
    }

    public deleteCategory(id) {
        event.stopPropagation();
        this.codeCategoryService.delete(id);
        this.codeCategoryService.setCurrentCategory("all");
    }

    public getCategories() {
        return this.codeCategoryService
            .allCategories
            .pipe(
                map(categories => categories
                    .filter(value => this.searchCategory ?
                        value.name.toUpperCase().includes(this.searchCategory.toUpperCase()) : true)));
    }

    public createNewCategory() {
        if (this.searchCategory.trim()) {
            this.codeCategoryService.create(this.searchCategory);
            this.searchCategory = "";
        }
    }

}
