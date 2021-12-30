import { Injectable } from '@angular/core';
import { ServerService } from '../server.service';

@Injectable()
export class CodeCategoryApiService {

    constructor(
        private server: ServerService,
    ) {
    }

    public create(name: string) {
        return this.server.request('POST', 'codecategory', { "Name": name }, true);
    }

    public delete(id: string) {
        return this.server.request('DELETE', `codecategory/${id}`, {}, true);
    }

    public getAll(isForce: boolean = false) {
        return this.server.request('GET', 'codecategory', {}, true);
    }

}