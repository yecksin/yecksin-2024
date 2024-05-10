import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() name: string = 'sentiment_satisfied';
  @Input() color: string = '';
}
