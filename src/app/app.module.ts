import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReunionListComponent } from './reunion-list/reunion-list.component';
import { ReunionDetailComponent } from './reunion-detail/reunion-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { LoginPlantillaComponent } from './login-plantilla/login-plantilla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TodosComponent } from './todos/todos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginPlantillaComponentComponent } from './login-plantilla-component/login-plantilla-component.component';


@NgModule({
  declarations: [AppComponent, ReunionListComponent, ReunionDetailComponent, LoginComponent, RegistroComponent, LoginPlantillaComponent, TodosComponent, UsuarioComponent, LoginPlantillaComponentComponent],
  imports: [BrowserModule,
            AppRoutingModule,
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            MatSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
