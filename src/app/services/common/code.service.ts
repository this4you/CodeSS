import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeCategoryModel } from 'src/app/model/codecategory.model';
import { CodeModel } from '../../model/code.model';
import { CodeApiService, CodeCreateRequest, CodeUpdateRequest } from '../api/code-api.service';
import { CodeCategoryService } from './code-category.service';

@Injectable()
export class CodeService {

    constructor(
        private codeApi: CodeApiService,
        public codeCategoryService: CodeCategoryService,
    ) { }

    get limit() {
        return 9;
    }

    private _allCode = new BehaviorSubject<CodeModel[]>([]);


    get allCode() {
        return this._allCode.asObservable();
    }

    public getAllCodeValue() {
        return this._allCode.getValue();
    }

    public loadCode(categoryId: string = "", isInitLoad: boolean = false) {
        categoryId = categoryId || this.codeCategoryService.getCurrentCategoryId();
        const limit = isInitLoad ? this.limit : this.getAllCodeValue().length + this.limit;
        if (categoryId == "all") {
            this.getAll({limit: limit}, true);
        } else {
            this.getAll({
                limit: limit,
                categoryId: categoryId
            }, true);
        }
    }

    public getAll(params: object = {}, isForce: boolean = false): void {
        var currentValues = this._allCode.getValue();
        if (currentValues.length == 0 || isForce) {
            this.codeApi.getAll(params)
                .subscribe((response: any) => {
                    if (response && Array.isArray(response)) {
                        let codes: CodeModel[] = [];
                        codes = response.map(item => new CodeModel(item.id, item.name, item.text, "",
                            new CodeCategoryModel(item?.codeCategory?.name || "all", item?.codeCategory?.id)));
                        this._allCode.next(codes);
                    }
                });
        }
    }

    public createCode(request: CodeCreateRequest) {
        return this.codeApi.create(request)
            .subscribe((response: any) => {
                const currentCodes = this._allCode.getValue();
                const codeCategory = new CodeCategoryModel(response.codeCategory.name, response.codeCategory.id);
                const newCode = new CodeModel(response.id, response.name, response.text, "", codeCategory);
                this._allCode.next([...currentCodes, newCode]);
            });
    }

    public updateCode(request: CodeUpdateRequest) {
        return this.codeApi.update(request)
            .subscribe((response: any) => {
                const currentCodes = this._allCode.getValue();
                const code = currentCodes.find(c => c.Id === request.Id);
                code.Text = request.Text,
                code.Title = request.Name,
                code.Category = this.codeCategoryService.getCategoryById(request.CodeCategoryId)
                this._allCode.next([...currentCodes]);

            });
    }

    public getCode(id:string) {
        return this.codeApi.get(id);
    }

    public deleteCode(id: string) {
        return this.codeApi.delete(id)
            .subscribe((response: any) => {
                const currentCodes = this._allCode.getValue();
                let codes = currentCodes.filter(i => i.Id != id);
                this._allCode.next(codes);
            });
    }
}