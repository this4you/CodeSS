import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CodeCategoryService } from 'src/app/services/common/code-category.service';
import { CodeService } from 'src/app/services/common/code.service';

@Component({
    selector: 'code-ss-code-catalog',
    templateUrl: './code-catalog.component.html',
    styleUrls: ['./code-catalog.component.scss']
})
export class CodeCatalogComponent implements OnInit, OnDestroy {
    currentCodeCategorySubscriber : Subscription;
    constructor(
        public codeCategoryService: CodeCategoryService,
        public codeService: CodeService,
        public router: Router
    ) { }

    ngOnDestroy(): void {
        this.currentCodeCategorySubscriber.unsubscribe();
    }

    ngOnInit(): void {
        this.codeCategoryService.getAll();
        this.currentCodeCategorySubscriber = this.codeCategoryService.currentCodeCategory.subscribe(category => {
            this.codeService.loadCode(category, true);
        });
    }
}
