import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initUserData, updateUserAvatar, updateUserData } from 'src/app/actions/user.actions';
import { User } from 'src/app/model/user.model';
import { State } from 'src/app/reducers';

@Component({
    selector: 'code-ss-user-profile-form',
    templateUrl: './user-profile-form.component.html',
    styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {
    user$: Observable<User> = this.store.select(state => state.user);

    public form: FormGroup;

    private file: File;

    constructor(private store: Store<State>,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.user$.subscribe((user) => {
            if (!this.form || !this.form.dirty) {
                this.iniForm(user);
            }
        })
    }

    iniForm(user: User) {
        this.form = this.fb.group({
            avatarFile: [''],
            id: [user.id],
            name: [user.name, [Validators.required]],
            email: [user.email, [Validators.email, Validators.required]]
        });
    }

    public async submitForm() {
        if (!this.form.invalid) {
            var formData = new FormData();
            formData.append("file", this.file, this.file.name);
            // formData.append('file', this.form.get('fileSource').value);
            this.store.dispatch(updateUserData(this.form.value));
            //this.store.dispatch(updateUserAvatar(formData));
            this.form.reset();
        }
    }

    public onFileSelected(event) {
        this.file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = () => {
            this.store.dispatch(initUserData({ avatar: reader.result } as User))
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };


        // if (file) {

        //     this.fileName = file.name;

        //     const formData = new FormData();

        //     formData.append("thumbnail", file);

        //     const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //     upload$.subscribe();
        // }
    }
}
