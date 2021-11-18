import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubpageComponent } from './home-subpage.component';

describe('HomeSubpageComponent', () => {
  let component: HomeSubpageComponent;
  let fixture: ComponentFixture<HomeSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
