import { ChangeDetectionStrategy, Component, Input, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'atom-input-checkbox-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-checkbox-switch.component.html',
  styleUrl: './input-checkbox-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCheckboxSwitchComponent {
  @Input() signal: WritableSignal<any> = signal({});
  @Input() attr: string = '';
  // Función para guardar el callback que se invoca cuando el valor del modelo cambia
  onChange = (value: any) => {
    this.signal.update((signal) => {
      signal[this.attr] = value;
      return { ...signal };
    });
  };
  // Función para guardar el callback que se invoca cuando el componente recibe un evento blur
  onTouched = () => {};
}
