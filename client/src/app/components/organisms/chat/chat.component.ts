import { ChangeDetectionStrategy, Component, Input, signal, WritableSignal } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { GetAllChats } from '../../../interfaces/api.interface';

@Component({
  selector: 'organism-chat',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  @Input() signal: WritableSignal<GetAllChats> = signal({
    title: '',
    checked: false,
    icon: '',
    id: 0,
    messages: [],
  });
}
