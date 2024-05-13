import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atom-input-checkbox-switch',
  standalone: true,
  imports: [],
  templateUrl: './input-checkbox-switch.component.html',
  styleUrl: './input-checkbox-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCheckboxSwitchComponent {
  @Input() value: boolean | undefined = false;
  changeValue(e: Event) {
    console.log('test');
    console.log(e);
    this.value = !this.value;
    //TODO usar como señal
  }
}
