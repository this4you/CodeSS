import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'code-ss-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeEditorComponent implements OnInit {
  public codeText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
