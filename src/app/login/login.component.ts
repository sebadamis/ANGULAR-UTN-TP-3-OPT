import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface LoginPage {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class Login {
  login : LoginPage[] = []

  submitFormLogin(){
    console.log(this.formStado)
    this.login.push({
      email: this.formStado.email,
      password: this.formStado.password
    })
    this.formStado.password = ""
  }
  formStado = {
    email: "",
    password: ""
  }
}
