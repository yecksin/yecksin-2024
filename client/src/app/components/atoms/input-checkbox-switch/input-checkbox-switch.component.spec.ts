import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckboxSwitchComponent } from './input-checkbox-switch.component';

describe('InputCheckboxSwitchComponent', () => {
  let component: InputCheckboxSwitchComponent;
  let fixture: ComponentFixture<InputCheckboxSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCheckboxSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputCheckboxSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
