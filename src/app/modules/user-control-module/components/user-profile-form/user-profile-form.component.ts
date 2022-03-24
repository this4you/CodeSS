import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateUserData } from 'src/app/actions/user.actions';
import { User } from 'src/app/model/user.model';
import { State } from 'src/app/reducers';

@Component({
    selector: 'code-ss-user-profile-form',
    templateUrl: './user-profile-form.component.html',
    styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {
    user$: Observable<User> = this.store.select(state => state.user);
    
    public emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    matcher = new UserErrorStateMatcher();

    public userData: User;

    constructor(private store: Store<State>) { }

    ngOnInit(): void {
        this.user$.subscribe((user) => {
            this.userData = {...user};
        })
    }

    public async submitForm(form: NgForm) {
        if (form.valid) {
            this.store.dispatch(updateUserData(this.userData));
        }
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

class UserErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
