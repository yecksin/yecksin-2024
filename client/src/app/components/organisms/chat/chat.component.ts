import { Component } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  selector: 'organism-chat',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
