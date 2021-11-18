import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditSubpageComponent } from './code-edit-subpage.component';

describe('CodeEditSubpageComponent', () => {
  let component: CodeEditSubpageComponent;
  let fixture: ComponentFixture<CodeEditSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeEditSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEditSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
