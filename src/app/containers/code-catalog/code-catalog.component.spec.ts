import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCatalogComponent } from './code-catalog.component';

describe('CodeCatalogComponent', () => {
  let component: CodeCatalogComponent;
  let fixture: ComponentFixture<CodeCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
