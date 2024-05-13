import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarChatComponent } from '../../components/organisms/sidebar-chat/sidebar-chat.component';

@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [RouterOutlet, SidebarChatComponent],
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.scss',
})
export default class IaComponent {}
