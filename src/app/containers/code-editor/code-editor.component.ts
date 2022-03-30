import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeModel } from 'src/app/model/code.model';
import { CodeCategoryModel } from 'src/app/model/codecategory.model';
import { CodeUpdateRequest } from 'src/app/services/api/code-api.service';
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
        this.initForm();
        this.codeCategoryService.getAll();
        this.activatedRoute.params.subscribe(params => {
            if (params?.codeId) {
                this.codeService.getCode(params?.codeId).subscribe(response => {
                    this.isEditMode = true;
                    const resp: any = response;
                    this.initForm(resp);
                    this.codeData = resp as CodeModel;
                });
            }
        });
    }

    initForm(code?: CodeModel) {
        this.form = this.fb.group({
            id: [code?.id || ""],
            name: [code?.name || "", [Validators.required, Validators.maxLength(50)]],
            text: [code?.text || ""],
            codeCategoryId: [code?.codeCategory?.id]
        });
    }

    onSaveButtonClick() {
        if (!this.form.invalid) {
            const request: CodeUpdateRequest = this.form.value;
            if (this.isEditMode) {
                this.updateData(request);
            } else {
                this.saveData(request);
            }
        }
    }

    updateData(requestData): void {
        this.codeService.updateCode(requestData);
    }

    saveData(requestData): void {
        this.codeService.createCode(requestData).add(() => {
            this.router.navigate(['/main/code/catalog/all]']);
        });
    }

}
