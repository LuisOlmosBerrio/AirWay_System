import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicesApiServiceService } from 'src/app/core/services/services-api-service.service';
import { LoginAdmin } from 'src/app/interfaces/LoginAdmin';
import { LoadingService } from 'src/app/shared/controllers/loading.service';
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

  constructor(
    private apiService: ServicesApiServiceService,
    private readonly loadingService: LoadingService,
    private readonly alertController: AlertController
  ) {}

  // Alternar visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Método para enviar los datos del formulario
  async login(): Promise<void> {
    await this.loadingService.show();
    if (!this.loginData.user_name || !this.loginData.password) {
      await this.loadingService.dismiss();
      this.showAlert();
      console.warn('Por favor, completa todos los campos.');
      return;
    }

    try {
      
      // Enviar los datos del formulario a la API
      const response: LoginAdmin = await this.apiService.post<LoginAdmin>(
        this.url,
        this.loginData
      );
      await this.loadingService.dismiss();
      // Mostrar la respuesta en la consola
      console.log('Respuesta de la API:', response);
    } catch (error) {
      // Manejar errores
      await this.loadingService.dismiss();
      this.showAlert();
      console.error('Error al autenticar:', error);
    }
  }
  
  async showAlert() {
    const alert = await this.alertController.create({
      header: '¡Alerta!',
      message: 'Nombre de usuario o contraseña incorrecto.',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            console.log('El usuario aceptó la alerta.');
          },
        },
      ],
    });

    // Presenta el alert en pantalla
    await alert.present();

    // Obtiene el resultado al cerrar el alert
    const result = await alert.onDidDismiss();
    console.log('Resultado:', result);
  }
}