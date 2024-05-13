import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atom-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() colorClass: string = 'text-white';
  @Input() weight: number = 0;
  @Input() size: number = 12;
  @Input() align: 'center' | 'start' = 'start';
}
