import { Injectable } from '@angular/core';
import { ServerService } from '../server.service';

@Injectable()
export class UserApiService {

    constructor(
        private server: ServerService,
    ) {
    }
    public get() {
        return this.server.request('GET', `user`, {}, true);
    }

}