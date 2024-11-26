import { Component } from '@angular/core';
import { ServicesApiServiceService } from 'src/app/core/services/services-api-service.service';

@Component({
  selector: 'app-auth-compani',
  templateUrl: './auth-compani.page.html',
  styleUrls: ['./auth-compani.page.scss'],
})
export class AuthCompaniPage {
  currentStep = 1;
  authenId: string | null = null; // Almacena el ID de autenticación
  formData = {
    user_name: '',
    password: '',
    confirmPassword: '',
    lastAccessDate: '', // Fecha de último acceso
    plan: '', // Plan seleccionado
    companyName: '',
    typeCompany: '',
    email: '',
    phoneNumber: '',
    address: '',
    contactPerson: '',
  };

  showPassword = false;

  constructor(private servicesApi: ServicesApiServiceService) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  register() {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifica.');
      return;
    }

    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);

    const payload = {
      user_name: this.formData.user_name,
      password: this.formData.password,
      state: 'creado',
      suppliers: 'correo y contraseña',
      last_access_date: formattedDate,
    };

    console.log('Payload enviado al backend:', payload);

    this.servicesApi
      .post('http://127.0.0.1:8000/api/auth/create', payload)
      .then((response: any) => {
        console.log('Usuario registrado:', response);
        this.authenticateUser(); // Autenticar después del registro
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario: ' + error.message);
      });
  }

  authenticateUser() {
    const authPayload = {
      user_name: this.formData.user_name,
      password: this.formData.password,
    };

    this.servicesApi
      .post('http://127.0.0.1:8000/api/auth/login', authPayload)
      .then((response: any) => {
        console.log('Autenticación exitosa:', response);

        if (response && response.user && response.user.id) {
          this.authenId = response.user.id;
          console.log('ID autenticado:', this.authenId);
          this.nextStep(); // Avanzar al paso siguiente
        } else {
          throw new Error('El backend no devolvió el campo user.id.');
        }
      })
      .catch((error) => {
        console.error('Error al autenticar usuario:', error);
        alert('Error al autenticar usuario: ' + error.message);
      });
  }

  registerCompany() {
    if (!this.authenId) {
      alert(
        'Error: No se encontró authen_id. Por favor, registre un usuario primero.'
      );
      return;
    }

    const planIdMap = {
      annual: 'ANL-5235',
      monthly: 'MTH-5678',
      daily: 'PVS-9101',
    };

    const planId = planIdMap[this.formData.plan as keyof typeof planIdMap];

    if (!planId) {
      alert('Por favor, selecciona un plan válido.');
      return;
    }

    const payload = {
      name: this.formData.companyName,
      type_company: this.formData.typeCompany,
      email: this.formData.email,
      phone_number: this.formData.phoneNumber,
      address: this.formData.address,
      contact_person: this.formData.contactPerson,
      authen_id: this.authenId,
      plan_id: planId,
    };

    this.servicesApi
      .post('http://127.0.0.1:8000/api/companies/create', payload)
      .then((response) => {
        console.log('Compañía registrada exitosamente:', response);
        alert('Compañía registrada exitosamente.');
        this.resetForm();
      })
      .catch((error) => {
        console.error('Error al registrar la compañía:', error);
        if (error.error && error.error.errors) {
          console.error('Detalles del error:', error.error.errors);
        }
        alert(`Error al registrar la compañía: ${error.error.message}`);
      });
  }

  resetForm() {
    this.currentStep = 1;
    this.formData = {
      user_name: '',
      password: '',
      confirmPassword: '',
      lastAccessDate: '',
      plan: '',
      companyName: '',
      typeCompany: '',
      email: '',
      phoneNumber: '',
      address: '',
      contactPerson: '',
    };
    this.authenId = null;
  }
}
