import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { SidebarButtonComponent } from '../../molecules/sidebar-button/sidebar-button.component';
import { SidebarContainerComponent } from '../../atoms/sidebar-container/sidebar-container.component';

@Component({
  selector: '[organism-sidebar]',
  standalone: true,
  imports: [SidebarButtonComponent, SidebarContainerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  @HostBinding('class.organism-sidebar') myClass = true;
}
