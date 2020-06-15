import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countingmoney',
  templateUrl: './countingmoney.component.html',
  styleUrls: ['./countingmoney.component.css'],
})
export class CountingmoneyComponent implements OnInit {
  loading: boolean = true;
  recibo: boolean = false;
  tiempo: number = 5000;
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(this.eventoClick, this.tiempo);
  }

  eventoClick() {
    let off = document.getElementById('off');
    off.click();
  }

  offSpinner() {
    this.loading = false;
    this.recibo = true;
    setTimeout(this.eventoClickRecibo, this.tiempo);
  }

  eventoClickRecibo() {
    let off = document.getElementById('recibo');
    off.click();
  }

  offRecibo() {
    this.recibo = false;
    setTimeout(this.eventoClickReiniciar, this.tiempo);
  }

  eventoClickReiniciar() {
    let off = document.getElementById('final');
    off.click();
  }
  reiniciar() {
    this.router.navigate(['/ending']);
  }
}
