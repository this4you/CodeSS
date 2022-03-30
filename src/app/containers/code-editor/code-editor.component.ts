import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeModel } from 'src/app/model/code.model';
import { CodeCategoryModel } from 'src/app/model/codecategory.model';
import { CodeCreateRequest, CodeUpdateRequest } from 'src/app/services/api/code-api.service';
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

    public form: FormGroup;

    
    constructor(
        public codeCategoryService: CodeCategoryService,
        public codeService: CodeService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.codeCategoryService.getAll();
        this.activatedRoute.params.subscribe(params => {
            if (params?.codeId) {
                this.codeService.getCode(params?.codeId).subscribe(response => {
                    this.isEditMode = true;
                    const resp: any = response;
                    this.form = this.fb.group({
                        id: [resp.id],
                        name: [resp.name],
                    });
                    this.codeData = resp as CodeModel;
                    if (resp.codeCategory) {
                        this.selectedCategory = resp.codeCategory.id;
                    }
                });
            }
        });
    }

    onSaveButtonClick() {
        debugger
        if (this.isEditMode) {
            this.updateData();
        } else {
            this.saveData();
        }
    }

    updateData(): void {
        const currentCategory: CodeCategoryModel =
            this.codeCategoryService.getCategoryById(this.selectedCategory);
        const request: CodeUpdateRequest = {
            id: this.codeData.id,
            name: this.codeData.name,
            text: this.codeData.text,
            codeCategoryId: currentCategory?.id
        };

        this.codeService.updateCode(request);      
    }

    saveData(): void {
        const currentCategory: CodeCategoryModel =
            this.codeCategoryService.getCategoryById(this.selectedCategory);
        const request: CodeCreateRequest = {
            codeCategoryId: currentCategory?.id,
            name: this.codeData.name,
            text: this.codeData.text
        };

        this.codeService.createCode(request).add(() => {
            this.router.navigate(['/main/code/catalog/all]']);
        });
    }

}
