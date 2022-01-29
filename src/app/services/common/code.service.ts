import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeCategoryModel } from 'src/app/model/codecategory.model';
import { CodeModel } from '../../model/code.model';
import { CodeApiService, CodeCreateRequest } from '../api/code-api.service';

@Injectable()
export class CodeService {

    constructor(
        private codeApi: CodeApiService
    ) { }

    private _allCode = new BehaviorSubject<CodeModel[]>([]);


    get allCode() {
        return this._allCode.asObservable();
    }

    public getAll(isForce: boolean = false): void {
        var currentValues = this._allCode.getValue();
        if (currentValues.length == 0 || isForce) {
            this.codeApi.getAll()
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