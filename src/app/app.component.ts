import { Component } from '@angular/core';
import { LandingService } from './services/landing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objeto: any = {};
  title = 'app';
  constructor(private serviceLanding: LandingService) { }
  guardar() {
    if (this.objeto.length !== 0) {
      this.objeto.fecha = new Date();
      this.serviceLanding.addContacto(this.objeto).then((res) => {
        this.objeto = {};
        window.alert('¡Gracias por escribirnos! Tu solicitud ha sido enviada exitosamente y pronto un asesor se pondrá en contacto')
      }, err => {
        window.alert(err);
      });
    }
  }
}
