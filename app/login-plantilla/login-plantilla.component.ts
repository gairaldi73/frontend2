import { Component } from '@angular/core';

@Component({
  selector: 'app-login-plantilla',
  templateUrl: './login-plantilla.component.html',
  styleUrls: ['./login-plantilla.component.css'],  
})
export class LoginPlantillaComponent {
  usuario: string | null;
  clave: string | null;
  constructor(){
    this.usuario=null;
    this.clave = null;
  }
  onSubmit(){
    try {
      console.log(this.usuario + ' ' + this.clave);
    } catch (error) {
      console.error(error);
    }
    
  }
  cambiar(){
    console.log("Hola");
  }
  obtenerValor(){
    console.log("obtengo valor");
  }
}
