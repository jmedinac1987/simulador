import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css'],
})
export class ConsultingComponent implements OnInit {
  loading: boolean = true;
  tiempo: number = 5000;
  saldo: String = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    let saldoNumerico = 0;
    saldoNumerico = Math.floor(Math.random() * 3000000) + 877803;
    this.saldo = saldoNumerico.toString();
    
    setTimeout(this.eventoClick, this.tiempo);
  }

  eventoClick() {
    let off = document.getElementById('off');
    off.click();
  }

  offSpinner() {
    this.loading = false;
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
