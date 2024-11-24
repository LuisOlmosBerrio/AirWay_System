import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-compani',
  templateUrl: './auth-compani.page.html',
  styleUrls: ['./auth-compani.page.scss'],
})
export class AuthCompaniPage {
  currentStep = 1; // Controla la sección visible

  formData = {
    plan: '',
    companyName: '',
    logoUrl: '',
    email: '',
    phoneNumber: '',
    address: '',
    contactPerson: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  register() {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration Data:', this.formData);
  }
}
