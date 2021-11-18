import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSubpageComponent } from './notification-subpage.component';

describe('NotificationSubpageComponent', () => {
  let component: NotificationSubpageComponent;
  let fixture: ComponentFixture<NotificationSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
