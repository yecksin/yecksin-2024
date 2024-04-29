import { Component, HostBinding } from '@angular/core';

@Component({
  selector: '[organism-sidebar]',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @HostBinding('class.organism-sidebar') myClass = true;
}
