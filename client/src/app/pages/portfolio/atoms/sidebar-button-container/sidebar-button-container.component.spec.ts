import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarButtonContainerComponent } from './sidebar-button-container.component';

describe('SidebarButtonContainerComponent', () => {
  let component: SidebarButtonContainerComponent;
  let fixture: ComponentFixture<SidebarButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarButtonContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
