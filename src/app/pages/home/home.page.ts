import { Component, ViewChild, TemplateRef } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedDate: string;

  @ViewChild('datePopoverTemplate', { static: true }) datePopoverTemplate!: TemplateRef<any>; // Usando el operador de aserción no nula

  constructor(private popoverController: PopoverController) {
    this.selectedDate = ''; // Inicializa la fecha seleccionada
  }

  async openDatePopover() {
    const popover = await this.popoverController.create({
      component: this.datePopoverTemplate,
      translucent: true,
      // Cambia esto para usar un template en lugar de un componente
      // Puedes usar createEmbeddedView si necesitas un TemplateRef
    });
    
    await popover.present();
    
    const { data } = await popover.onDidDismiss();
    
    if (data) {
      this.selectedDate = data; // Actualiza la fecha seleccionada
    }
  }

  closePopover() {
    this.popoverController.dismiss(this.selectedDate); // Cierra el popover y pasa la fecha seleccionada
  }
}