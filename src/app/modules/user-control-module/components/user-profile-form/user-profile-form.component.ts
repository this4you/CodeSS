import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { State } from 'src/app/reducers';

@Component({
    selector: 'code-ss-user-profile-form',
    templateUrl: './user-profile-form.component.html',
    styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {
    user$: Observable<User> = this.store.select(state => state.user);
    public ImgUrl = '';
    public Login = '';
    constructor(private store: Store<State>) { }

    ngOnInit(): void {
        this.user$.subscribe((user) => {
            if (user && user.avatar) {
                this.ImgUrl = 'data:image/png;base64,' + user.avatar;
            }
            this.Login = user.login;
        })
    }

    public onFileSelected(event) {
        debugger
        const file: File = event.target.files[0];

        // if (file) {

        //     this.fileName = file.name;

        //     const formData = new FormData();

        //     formData.append("thumbnail", file);

        //     const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //     upload$.subscribe();
        // }
    }
}
