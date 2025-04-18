import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  connectionBtn = 'Se connecter';
  @Input() formType: 'login' | 'signup' = 'login';
}
