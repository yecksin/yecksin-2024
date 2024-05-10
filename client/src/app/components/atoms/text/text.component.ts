import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input() color: string = '';
}
