import { Component } from '@angular/core';
import { ServicesApiServiceService } from 'src/app/core/services/services-api-service.service';
import { LoginAdmin } from 'src/app/interfaces/LoginAdmin';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage {
  // Datos del formulario
  loginData = {
    user_name: '',
    password: ''
  };

  // Visibilidad de la contraseña
  showPassword: boolean = false;

  // URL de la API
  url = environment.URL_BASE + 'auth/login'; 

  constructor(private apiService: ServicesApiServiceService) {}

  // Alternar visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Método para enviar los datos del formulario
  async login(): Promise<void> {
    if (!this.loginData.user_name || !this.loginData.password) {
      console.warn('Por favor, completa todos los campos.');
      return;
    }

    try {
      // Enviar los datos del formulario a la API
      const response: LoginAdmin = await this.apiService.post<LoginAdmin>(
        this.url,
        this.loginData
      );

      // Mostrar la respuesta en la consola
      console.log('Respuesta de la API:', response);
    } catch (error) {
      // Manejar errores
      console.error('Error al autenticar:', error);
    }
  }
}
