import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initUserData } from 'src/app/actions/user.actions';
import { State } from 'src/app/reducers';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'code-ss-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    login$: Observable<string> = this.store.select(state => state.user.login);
    constructor(public authService: AuthService, private store: Store<State>) { }

    ngOnInit(): void {
    }

    logout() {
        this.authService.logout();
        this.store.dispatch(initUserData(null))
    }

}
