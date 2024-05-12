import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextComponent } from '../../../../components/atoms/text/text.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicesComponent {}
