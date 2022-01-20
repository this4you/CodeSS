import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CodeModel } from 'src/app/model/code.model';
import { CodeCreateRequest } from 'src/app/services/api/code-api.service';
import { CodeCategoryService } from 'src/app/services/common/code-category.service';
import { CodeService } from 'src/app/services/common/code.service';

@Component({
    selector: 'code-ss-code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CodeEditorComponent implements OnInit {
    public codeData: CodeModel = new CodeModel();

    constructor(
        public codeCategoryService: CodeCategoryService,
        public codeService: CodeService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.codeCategoryService.getAll();
    }

    saveData(): void {
        const request: CodeCreateRequest = {
            CodeCategoryId: this.codeData.Category.Id,
            Name: this.codeData.Title,
            Text: this.codeData.Text,
            Title: this.codeData.Title
        };
        this.codeService.CreateCode(request).add(() => {
            this.router.navigate(['/main/code/catalog/all]']);
        });
    }

}
