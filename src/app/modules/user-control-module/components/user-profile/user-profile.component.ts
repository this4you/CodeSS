import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userActions } from 'src/app/actions'; 
import { State } from 'src/app/reducers';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'code-ss-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    constructor(public authService: AuthService, private store: Store<State>) { }

    ngOnInit(): void {
    }

    logout() {
        this.authService.logout();
        this.store.dispatch(userActions.setUser(null));
    }

}
