import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeItemComponent } from './code-item.component';

describe('CodeItemComponent', () => {
  let component: CodeItemComponent;
  let fixture: ComponentFixture<CodeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
