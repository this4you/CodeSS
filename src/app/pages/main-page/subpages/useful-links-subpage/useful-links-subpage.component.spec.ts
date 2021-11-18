import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulLinksSubpageComponent } from './useful-links-subpage.component';

describe('UsefulLinksSubpageComponent', () => {
  let component: UsefulLinksSubpageComponent;
  let fixture: ComponentFixture<UsefulLinksSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefulLinksSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulLinksSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
