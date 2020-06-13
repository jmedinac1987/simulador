import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterpasswordtwo',
  templateUrl: './enterpasswordtwo.component.html',
  styleUrls: ['./enterpasswordtwo.component.css'],
})
export class EnterpasswordtwoComponent implements OnInit {
  password: string = '';
  passwordIngresado: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  asignarValorPass(valor: string): string {
    let valorTemporal = '';
    valorTemporal = this.password == '0' ? '' : this.password;
    this.password = valorTemporal + valor;
    return this.password;
  }

  continueOperationCost() {
    let listaPass = [1000, 2222, 1249, 1322, 5678];
    let passwordaVerificar = false;
    this.passwordIngresado = parseInt(this.password);

    passwordaVerificar =
      listaPass.indexOf(this.passwordIngresado) > -1 ? true : false;

    if (passwordaVerificar) {
      this.router.navigate(['/operationcosttwo']);
    } else {
      alert('Contraseña errada');
    }
  }
}
