import { Injectable } from '@angular/core';
import { ServerService } from '../server.service';


export type CodeCreateRequest = {
    Name: string,
    Text: string,
    CodeCategoryId: string
};

export type CodeUpdateRequest = {
    Id: string,
    Name: string,
    Text: string,
    CodeCategoryId: string 
}

export type CodeParams = {
    categoryId: string,
    limit: number
}

@Injectable()
export class CodeApiService {

    constructor(
        private server: ServerService,
    ) {
    }

    public getAll(params: CodeParams) {
        return this.server.request('GET', 'code', params || {}, true);
    }

    public get(id: string) {
        return this.server.request('GET', `code/${id}`, {}, true);
    }

    public create(request: CodeCreateRequest) {
        return this.server.request('POST', 'code', request, true);
    }

    public delete(id: string) {
        return this.server.request('DELETE', `code/${id}`, {}, true);
    }

    public update(request: CodeUpdateRequest) {
        return this.server.request('PUT', `code/${request.Id}`, request, true);
    }

}