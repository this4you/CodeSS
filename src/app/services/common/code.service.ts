import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeCategoryModel } from 'src/app/model/codecategory.model';
import { CodeModel } from '../../model/code.model';
import { CodeApiService, CodeCreateRequest, CodeParams, CodeUpdateRequest } from '../api/code-api.service';
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
            this.getAll({limit: limit} as CodeParams, true);
        } else {
            this.getAll({
                limit: limit,
                categoryId: categoryId
            }, true);
        }
    }

    public getAll(params: CodeParams, isForce: boolean = false): void {
        var currentValues = this._allCode.getValue();
        if (currentValues.length == 0 || isForce) {
            this.codeApi.getAll(params)
                .subscribe((response: any) => {
                    if (response && Array.isArray(response)) {
                        this._allCode.next(response);
                    }
                });
        }
    }

    public createCode(request: CodeCreateRequest) {
        return this.codeApi.create(request)
            .subscribe((response: CodeModel) => {
                const currentCodes = this._allCode.getValue();
                this._allCode.next([...currentCodes, response]);
            });
    }

    public updateCode(request: CodeUpdateRequest) {
        return this.codeApi.update(request)
            .subscribe((response: any) => {
                const currentCodes = this._allCode.getValue();
                const code = currentCodes.find(c => c.id === request.id);
                code.text = request.text,
                code.name = request.name,
                code.codeCategory = this.codeCategoryService.getCategoryById(request.codeCategoryId)
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
                let codes = currentCodes.filter(i => i.id != id);
                this._allCode.next(codes);
            });
    }
}