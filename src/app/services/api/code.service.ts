import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeCategoryModel } from 'src/app/model/codecategory.model';
import { CodeModel } from '../../model/code.model';
import { ServerService } from '../server.service';

@Injectable()
export class CodeService {

    constructor(
        private server: ServerService,
    ) { }

    private _allCode = new BehaviorSubject<CodeModel[]>([]);


    get allCode() {
        return this._allCode.asObservable();
    }

    public getAll(isForce: boolean = false): void {
        var currentValues = this._allCode.getValue();
        if (currentValues.length == 0 || isForce) {
            this.server.request('GET', 'code', {}, true)
                .subscribe((response: any) => {
                    if (response && Array.isArray(response)) {
                        let codes: CodeModel[] = [];
                        codes = response.map(item => new CodeModel(item.id, item.name, item.title, item.text,
                            new CodeCategoryModel(item?.codeCategory?.name || "all", item?.codeCategory?.id)));
                        this._allCode.next(codes);
                    }
                });
        }
    }
}