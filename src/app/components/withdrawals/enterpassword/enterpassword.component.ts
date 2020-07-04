import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterpassword',
  templateUrl: './enterpassword.component.html',
  styleUrls: ['./enterpassword.component.css'],
})
export class EnterpasswordComponent implements OnInit {
  password: string = '';
  passwordIngresado: number = 0;
  largoMaximoParaPassword: number = 4;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  asignarValorPass(valor: string): string {
    let valorTemporal = '';
    let valorTemporal2 = '';
    valorTemporal = this.password == '0' ? '' : this.password;
    valorTemporal2 = valorTemporal + valor;
    if (valorTemporal2.length <= this.largoMaximoParaPassword) this.password = valorTemporal + valor;

    return this.password;
  }

  continueOperationCost() {
    let listaPass = [1000, 2222, 4448, 3333, 5678];
    let passwordaVerificar = false;
    this.passwordIngresado = parseInt(this.password);

    passwordaVerificar =
      listaPass.indexOf(this.passwordIngresado) > -1 ? true : false;

    if (passwordaVerificar) {
      this.router.navigate(['/operationcost']);
    } else {
      alert('Contraseña errada');
    }
  }
}
