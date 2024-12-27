import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User;
  constructor(private service: LoginService) {
    this.user = new User('', '');
  }
  login() {
    this.service.login(this.user.username, this.user.password).subscribe(() => {
      console.log('Ingrese');
    });
  }
}

/*loginForm!: FormGroup;
  constructor (private fb: FormBuilder, private service: LoginService){}
  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  login(){
    this.service
      .login(
        this.loginForm.controls['username'].value,
        this.loginForm.controls['password'].value
    ).subscribe();

  }
}
*/
