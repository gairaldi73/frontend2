import { Injectable } from '@angular/core';
import { Reunion } from './reunion';

@Injectable({
  providedIn: 'root',
})
export class ReunionService {
  reuniones: Reunion[] = [
    { id: 1, nombre: 'DESARROLLO', fecha: new Date (2024, 3, 21), duracion:2, participantes: ["John", "Sophie", "Alan"], detalle: "Desarrollando la WEB"},
    { id: 2, nombre: 'TESTING', fecha: new Date(2024, 3, 21), duracion: 2, participantes: ["Janet", "Kevin", "Michael"], detalle: "Probando la WEB"},
  ];
  constructor() {}

  getReuniones() {
    return this.reuniones;
  }

  getReunion(id: string | null) {
    return this.reuniones.find((reunion) => {
      return reunion.id === Number(id);
    });
  }
}
