import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CodeCategoryService } from 'src/app/services/common/code-category.service';
import { CodeService } from 'src/app/services/common/code.service';

@Component({
    selector: 'code-ss-code-content',
    templateUrl: './code-content.component.html',
    styleUrls: ['./code-content.component.scss']
})
export class CodeContentComponent implements OnInit {

    constructor(
        public codeCategoryService: CodeCategoryService,
        public codeService: CodeService,
    ) { }

    ngOnInit(): void {
    }

    public loadMore() {
        this.codeService.loadCode();
    }

    public getAllCode() {
        return this.codeService.allCode;
    }

}
