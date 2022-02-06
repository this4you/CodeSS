import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'code-ss-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  @Input() routerLink = null;

  @Output() click = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(event: MouseEvent): void {
    this.click.emit(event);
  }

}
