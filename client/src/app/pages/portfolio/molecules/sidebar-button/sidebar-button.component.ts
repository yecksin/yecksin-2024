import { Component } from '@angular/core';
import { SidebarButtonContainerComponent } from '../../atoms/sidebar-button-container/sidebar-button-container.component';
import { SidebarContainerComponent } from '../../atoms/sidebar-container/sidebar-container.component';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  selector: 'molecule-sidebar-button',
  standalone: true,
  imports: [SidebarButtonContainerComponent, IconComponent],
  templateUrl: './sidebar-button.component.html',
  styleUrl: './sidebar-button.component.scss',
})
export class SidebarButtonComponent {}
