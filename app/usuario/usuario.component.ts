import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioForm: FormGroup;
  message = '';
  fecha = new Date();
  constructor (private fb: FormBuilder, private service: UsuarioService){
    this.usuarioForm = fb.group({
      nombre: [''],
      apellido: [''],
    })
  }
  ngOnInit(){
    this.service.getAll().subscribe((usuarios) =>{
      this.usuarios = usuarios;
  });
 }
 alEnviar(){
  const user = new Usuario(this.usuarioForm.value);
  this.service.guardarUsuario(user).subscribe(() => {
  this.message = 'Guardado con éxito';
  });
}
borrar(id: number){
  this.service.borrarUsuario(id).subscribe(() => {
    this.message = 'Eliminado con éxito!';
  });
}
editar(id:number){
  const usuario =this.usuarios.find((usuario) =>{
    return usuario.id ===id;
  });
  this.usuarioForm.setValue({
  nombre: usuario?.nombre,
  apellido: usuario?.apellido,
  });
}
}
