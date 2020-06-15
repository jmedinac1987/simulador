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
