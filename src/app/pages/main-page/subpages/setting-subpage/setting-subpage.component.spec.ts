import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSubpageComponent } from './setting-subpage.component';

describe('SettingSubpageComponent', () => {
  let component: SettingSubpageComponent;
  let fixture: ComponentFixture<SettingSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
