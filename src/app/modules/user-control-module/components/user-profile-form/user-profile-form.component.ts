import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userActions } from 'src/app/actions'; 
import { User } from 'src/app/model/user.model';
import { State } from 'src/app/reducers';
import { UserApiService } from 'src/app/services/api/user-api.service';

@Component({
    selector: 'code-ss-user-profile-form',
    templateUrl: './user-profile-form.component.html',
    styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {
    user$: Observable<User> = this.store.select(state => state.user);

    public form: FormGroup;

    constructor(private store: Store<State>,
        private fb: FormBuilder, private userApiService: UserApiService) { }

    ngOnInit(): void {
        this.user$.subscribe((user) => {
            if (!this.form || !this.form.dirty) {
                this.iniForm(user);
            }
        })
    }

    iniForm(user: User) {
        this.form = this.fb.group({
            id: [user.id],
            name: [user.name, [Validators.required, Validators.maxLength(50)]],
            email: [user.email, [Validators.email, Validators.required]]
        });
    }

    public async submitForm() {
        if (!this.form.invalid) {
            this.store.dispatch(userActions.updateUser(this.form.value));
            this.form.reset();
        }
    }

    public onFileSelected(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        this.userApiService.updateAvatar(formData).subscribe(() => {
            this.updateAvatarStore(file);
        });
    }

    private updateAvatarStore(file:File) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.store.dispatch(userActions.setUser({ avatar: reader.result } as User))
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
}
