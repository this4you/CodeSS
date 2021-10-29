import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-ss-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  hide = true;
  repeatHide = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
