import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
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

    public update(request: User) {
        return this.server.request('PUT', `user/${request.id}`, request, true); 
    }
    
    public updateAvatar(formData: FormData) {
        return this.server.request('POST', `user/avatar`, formData, true);
    }
}