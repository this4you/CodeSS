import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initUserData, updateUserData } from 'src/app/actions/user.actions';
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

    constructor(private store: Store<State>,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.user$.subscribe((user) => {
            this.iniForm(user);
        })
    }

    iniForm(user: User) {
        this.form = this.fb.group({
            id: [user.id],
            name: [user.name, [Validators.required]],
            email: [user.email, [Validators.email, Validators.required]]
        });
    }

    public async submitForm() {
        if (!this.form.invalid) {    
            this.store.dispatch(updateUserData(this.form.value));
        }
    }

    public onFileSelected(event) {
        const file: File = event.target.files[0];
        
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.store.dispatch(initUserData({avatar: reader.result} as User))
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

class UserErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
