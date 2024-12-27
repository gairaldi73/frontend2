import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app2';
  constructor(private router: Router) {}

  llamada() {
    this.router.navigate(['/listado/detalle', 2]);
  }
}
