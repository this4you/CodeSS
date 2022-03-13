import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeCategoryService } from 'src/app/services/common/code-category.service';
import { CodeService } from 'src/app/services/common/code.service';

@Component({
    selector: 'code-ss-code-catalog',
    templateUrl: './code-catalog.component.html',
    styleUrls: ['./code-catalog.component.scss']
})
export class CodeCatalogComponent implements OnInit {

    constructor(
        public codeCategoryService: CodeCategoryService,
        public codeService: CodeService,
        public router: Router
    ) { }

    ngOnInit(): void {
        const count = 9; // initial count, TODO take from screen size
        const params = {
            limit: count
        };
        this.codeCategoryService.getAll();
        // this.codeService.getAll({
        //     limit: count
        // });
        this.codeCategoryService.currentCodeCategory.subscribe(category => {
            if (category == "all") {
                this.router.navigate(['/main/code/catalog/all']);
                this.codeService.getAll({limit: count}, true);
            } else {
                this.codeService.getAll({
                    limit: count,
                    categoryId: category
                }, true);
            }
        });
    }
}
