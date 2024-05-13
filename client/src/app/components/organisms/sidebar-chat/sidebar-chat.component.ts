import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { InputCheckboxSwitchComponent } from '../../atoms/input-checkbox-switch/input-checkbox-switch.component';
import { ChatsService } from '../../../pages/ia/services/chats.service';

@Component({
  selector: 'organism-sidebar-chat',
  standalone: true,
  imports: [TextComponent, InputCheckboxSwitchComponent],
  templateUrl: './sidebar-chat.component.html',
  styleUrl: './sidebar-chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarChatComponent {
  chatsSE = inject(ChatsService);

  hideContext() {
    console.log('hideContext');
  }
}
