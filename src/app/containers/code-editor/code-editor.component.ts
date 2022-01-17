import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CodeModel } from 'src/app/model/code.model';
import { CodeCategoryService } from 'src/app/services/common/code-category.service';

@Component({
  selector: 'code-ss-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeEditorComponent implements OnInit {
  public codeData: CodeModel = new CodeModel();
  constructor(
    public codeCategoryService: CodeCategoryService
  ) { }
  ngOnInit(): void {
    this.codeCategoryService.getAll();
  }


}
