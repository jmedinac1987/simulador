import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-othervalue',
  templateUrl: './othervalue.component.html',
  styleUrls: ['./othervalue.component.css'],
})
export class OthervalueComponent implements OnInit {
  valorARetirar: string = '0';
  validarValorARetirar: number = 0;
  largoMaximoParaValor: number = 6;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  asignarValorLabel(valor: string): string {
    let valorTemporal = '';
    let valorTemporal2 = '';
    valorTemporal = this.valorARetirar == '0' ? '' : this.valorARetirar;
    valorTemporal2 = valorTemporal + valor;
    if (valorTemporal2.length <= this.largoMaximoParaValor)
      this.valorARetirar = valorTemporal + valor;

    return this.valorARetirar;
  }

  continueDonation() {
    let valoraverificarString = '';
    this.validarValorARetirar = parseInt(this.valorARetirar);
    let valoraverificar = this.validarValorARetirar / 10000;

    valoraverificarString = valoraverificar.toString();

    let vector = [];
    vector = valoraverificarString.split('.');

    if (
      vector.length == 1 &&
      this.validarValorARetirar >= 10000 &&
      this.validarValorARetirar <= 600000
    ) {
      this.router.navigate(['/donation']);
    } else {
      alert('El valor ingresado no es valido para retirar');
    }
  }
}
