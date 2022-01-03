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

    constructor(
        public codeCategoryService: CodeCategoryService,
        public codeService: CodeService,
        public router: Router
    ) { }

    ngOnInit(): void {
        this.codeCategoryService.getAll();
        this.codeService.getAll();
        this.codeCategoryService.currentCodeCategory.subscribe(category => {
            if (category == "all") {
                this.router.navigate(['/main/code/catalog/all']);
            }
        });
    }
}
