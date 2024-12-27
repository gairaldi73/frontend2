import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  registroForm;
  constructor(private fb: FormBuilder){
      this.registroForm = fb.group({
      nombre: [''],
      apellido: [''],
      direccion: fb.group({
        calle: ['', [Validators.required]],
        altura: [''],
                          }),
  
                                 });
                                     }
  ngOnInit() {
    /*Al patchValue lo podemos usar en el ngOnInit()*/
    /* para cargar en el formulario unos datos iniciales*/
    this.registroForm.patchValue({
      nombre: 'Juan',
      direccion: {altura: '1232'},
    });
  }
      //this.registroForm = new FormGroup({
      //nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      //apellido: new FormControl(''),
      //direccion: new FormGroup({
        //calle: new FormControl('', [Validators.required]),
        //altura: new FormControl('')
     //})
  
   //                           });
  
  cambiar(){
    /*PASO UN VALOR
    this.registroForm.get('nombre')?.setValue('Todo de nuevo');*/
    /*PASO TODOS LOS VALORES
    this.registroForm.setValue({
      nombre: 'Juan',
      apellido: 'Perez',
      direccion: {calle: 'Zeballos', altura: '1232'},

    });*/
    /*PASO SÓLO ALGUNOS VALORES*/
    this.registroForm.patchValue({
      nombre: 'Juan',
      direccion: {altura: '1232'},
    });
  }
  obtenerValor(){
    return this.registroForm.get('nombre')?.value;
  }
  formSubmit(){
    const user: Usuario = new Usuario(this.registroForm.value);
    console.log(this.registroForm.value);
  }
}
