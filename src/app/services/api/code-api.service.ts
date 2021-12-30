import { Injectable } from '@angular/core';
import { ServerService } from '../server.service';

@Injectable()
export class CodeApiService {

    constructor(
        private server: ServerService,
    ) {
    }

    public getAll(isForce: boolean = false) {
        return this.server.request('GET', 'code', {}, true);
    }

}