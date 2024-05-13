import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatComponent } from '../../../components/organisms/chat/chat.component';
import { ChatsService } from '../services/chats.service';

@Component({
  selector: 'app-all-chats',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './all-chats.component.html',
  styleUrl: './all-chats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AllChatsComponent {
  chatsSE = inject(ChatsService);
}
