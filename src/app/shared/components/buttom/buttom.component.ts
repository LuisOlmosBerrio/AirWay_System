import { Component, Input } from '@angular/core';

type ColorButtontype =
  | 'success'
  | 'danger'
  | 'primary'
  | 'warning'
  | 'secondary';
type ButtonType = 'button' | 'submit';
type ExpandType = 'block' | 'default' | 'full';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss'],
})
export class ButtomComponent {
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';
  @Input({ required: true }) value = '';
  @Input() type: ButtonType = 'button';
  @Input() color: ColorButtontype = 'success';
  @Input() expand: ExpandType = 'default';
  @Input() icon: string = '';
  @Input() customClass: string = '';
  @Input() disable: boolean = false;

  constructor() {}
}
