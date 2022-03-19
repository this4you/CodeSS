import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initUserData, loadUserData } from 'src/app/actions/user.actions';
import { CodeCategoryService } from 'src/app/services/common/code-category.service';

@Component({
  selector: 'code-ss-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public codeCategoryService: CodeCategoryService,
    private store: Store) { }

  ngOnInit(): void {
      this.store.dispatch(loadUserData());
  }

}
