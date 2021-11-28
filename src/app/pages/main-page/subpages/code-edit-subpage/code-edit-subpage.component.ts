import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeCategoryService } from 'src/app/services/code-category.service';

@Component({
  selector: 'code-ss-code-edit-subpage',
  templateUrl: './code-edit-subpage.component.html',
  styleUrls: ['./code-edit-subpage.component.scss']
})
export class CodeEditSubpageComponent implements OnInit {

  constructor(
    public codeCategoryService: CodeCategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/main/code/all']);
  }
}
