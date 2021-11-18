import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSubpageComponent } from './chat-subpage.component';

describe('ChatSubpageComponent', () => {
  let component: ChatSubpageComponent;
  let fixture: ComponentFixture<ChatSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
