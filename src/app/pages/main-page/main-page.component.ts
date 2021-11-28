import { Component, OnInit } from '@angular/core';
import { CodeCategoryService } from 'src/app/services/code-category.service';

@Component({
  selector: 'code-ss-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public codeCategoryService: CodeCategoryService) { }

  ngOnInit(): void {
  }

}
