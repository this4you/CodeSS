import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeCategoryModel } from 'src/app/model/codecategory.model';
import { CodeModel } from '../../model/code.model';
import { ServerService } from '../server.service';

@Injectable()
export class CodeService {

    constructor(
        private server: ServerService,
    ) {
        this.getAll();
    }

    private _allCode = new BehaviorSubject<CodeModel[]>([]);


    get allCode() {
        return this._allCode.asObservable();
    }

    // create(name: string) {
    //     return this.server.request('POST', 'codecategory', { "Name": name }, true)
    //         .subscribe((response: any) => {
    //             const currentCategories = this._allCategories.getValue();
    //             let categories = [...currentCategories, new CodeCategoryModel(response.id, response.name)];
    //             this._allCategories.next(categories);
    //         });
    // }

    // delete(id: string) {
    //     return this.server.request('DELETE', `codecategory/${id}`, {}, true)
    //         .subscribe((response: any) => {
    //             const currentCategories = this._allCategories.getValue();
    //             let categories = currentCategories.filter(i => i.Id != id);
    //             this._allCategories.next(categories);
    //         });
    // }

    private getAll() {
        return this.server.request('GET', 'code', {}, true)
            .subscribe((response: any) => {
                if (response && Array.isArray(response)) {
                    let codes: CodeModel[] = [];
                    codes = response.map(item => new CodeModel(item.id, item.name, item.title, item.text,
                        new CodeCategoryModel(item?.codeCategory?.name || "all",  item?.codeCategory?.id)));
                    this._allCode.next(codes);
                }
            });
    }
}