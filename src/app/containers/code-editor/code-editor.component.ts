import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeModel } from 'src/app/model/code.model';
import { CodeCategoryModel } from 'src/app/model/codecategory.model';
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
    public selectedCategory: string = "";
    protected isEditMode = false;
    constructor(
        public codeCategoryService: CodeCategoryService,
        public codeService: CodeService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.codeCategoryService.getAll();
        this.activatedRoute.params.subscribe(params => {
            if (params?.codeId) {
                this.codeService.getCode(params?.codeId).subscribe(response => {
                    this.isEditMode = true;
                    const resp: any = response;
                    this.codeData = new CodeModel(
                        resp.id,
                        resp.name,
                        resp.text
                    );
                    if (resp.codeCategory) {
                        this.selectedCategory = resp.codeCategory.name;
                    }
                });
            }
        });
    }

    saveData(): void {
        const currentCategory: CodeCategoryModel =
            this.codeCategoryService.getCategoryByName(this.selectedCategory);
        const request: CodeCreateRequest = {
            CodeCategoryId: currentCategory.Id,
            Name: this.codeData.Title,
            Text: this.codeData.Text,
            Title: this.codeData.Title
        };

        this.codeService.createCode(request).add(() => {
            this.router.navigate(['/main/code/catalog/all]']);
        });
    }

}
