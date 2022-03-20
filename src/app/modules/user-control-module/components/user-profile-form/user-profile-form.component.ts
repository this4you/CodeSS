import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-ss-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onFileSelected(event) {
    debugger
    const file:File = event.target.files[0];

    // if (file) {

    //     this.fileName = file.name;

    //     const formData = new FormData();

    //     formData.append("thumbnail", file);

    //     const upload$ = this.http.post("/api/thumbnail-upload", formData);

    //     upload$.subscribe();
    // }
}
}
