import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSubpageComponent } from './teams-subpage.component';

describe('TeamsSubpageComponent', () => {
  let component: TeamsSubpageComponent;
  let fixture: ComponentFixture<TeamsSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
