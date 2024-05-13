import { Component } from '@angular/core';
import { IconComponent } from '../../../components/atoms/icon/icon.component';

@Component({
  selector: 'app-all-chats',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './all-chats.component.html',
  styleUrl: './all-chats.component.scss',
})
export default class AllChatsComponent {}
