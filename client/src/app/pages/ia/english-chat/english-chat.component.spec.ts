import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishChatComponent } from './english-chat.component';

describe('EnglishChatComponent', () => {
  let component: EnglishChatComponent;
  let fixture: ComponentFixture<EnglishChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
