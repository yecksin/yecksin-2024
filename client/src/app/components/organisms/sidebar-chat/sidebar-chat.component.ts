import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { InputCheckboxSwitchComponent } from '../../atoms/input-checkbox-switch/input-checkbox-switch.component';

@Component({
  selector: 'organism-sidebar-chat',
  standalone: true,
  imports: [TextComponent, InputCheckboxSwitchComponent],
  templateUrl: './sidebar-chat.component.html',
  styleUrl: './sidebar-chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarChatComponent {
  options = [
    { title: 'Example 1', icon: 'person', id: 1 },
    { title: 'Example 2', icon: 'person', id: 2 },
    { title: 'Example 3', icon: 'person', id: 3 },
  ];

  hideContext() {
    console.log('hideContext');
  }
}
