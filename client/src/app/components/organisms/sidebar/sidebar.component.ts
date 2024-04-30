import { Component, HostBinding } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: '[organism-sidebar]',
  standalone: true,
  imports: [IconComponent, TextComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @HostBinding('class.organism-sidebar') myClass = true;
}
