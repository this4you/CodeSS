import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers';
import { AuthService } from './services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    login$: Observable<string> = this.store.select(state => state.user.login);
    constructor(public authService: AuthService, private store: Store<State>) { }

    logout() {
        this.authService.logout();
    }
}
