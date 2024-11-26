import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-ofers',
  templateUrl: './new-ofers.page.html',
  styleUrls: ['./new-ofers.page.scss'],
})
export class NewOfersPage implements OnInit {
  offerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.offerForm = this.formBuilder.group({
      company_id: ['', [Validators.required, Validators.maxLength(100)]],
      room_id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price_per_night: ['', [Validators.required, Validators.min(1)]],
      available_from: ['', Validators.required],
      available_until: ['', Validators.required]
    }, { validator: this.dateValidator });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.offerForm.valid) {
      console.log('Formulario enviado', this.offerForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  dateValidator(group: FormGroup) {
    const availableFrom = group.get('available_from')?.value;
    const availableUntil = group.get('available_until')?.value;

    if (availableFrom && availableUntil && new Date(availableFrom) > new Date(availableUntil)) {
      return { invalidDates: true };
    }
    return null;
  }
}
