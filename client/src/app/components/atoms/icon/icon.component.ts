import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atom-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() name: string = 'sentiment_satisfied';
  @Input() color: string = '';
  @Input() bgColor: string = '';
  @Input() size: number = 20;
}
