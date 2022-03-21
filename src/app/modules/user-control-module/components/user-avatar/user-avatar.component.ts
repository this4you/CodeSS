import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { State } from 'src/app/reducers';

@Component({
    selector: 'code-ss-user-avatar',
    templateUrl: './user-avatar.component.html',
    styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
    user$: Observable<User> = this.store.select(state => state.user);
    public ImgUrl = '';
    public Login = '';
    @Input() Size: number = 150;
    constructor(private store: Store<State>) { }

    ngOnInit(): void {
        this.user$.subscribe((user) => {
            this.ImgUrl = user.avatar && ('data:image/png;base64,' + user.avatar);
            this.Login = user.login;
        })
    }

}
