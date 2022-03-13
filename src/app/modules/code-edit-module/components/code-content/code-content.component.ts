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

    public getAllCode(currentCategoryId: string, limit: number = 0) {
        // return this.codeService.getAll({
        //     limit: limit,
        //     categoryId: currentCategoryId
        // }, true);
        return this.codeService
            .allCode
            .pipe(
                map(codes => codes
                    .filter(value =>
                        currentCategoryId == "all" ? true : value.Category.Id == currentCategoryId)));
    }

}
