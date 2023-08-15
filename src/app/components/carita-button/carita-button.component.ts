import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carita-button',
  templateUrl: './carita-button.component.html',
  styleUrls: ['./carita-button.component.css']
})
export class CaritaButtonComponent {
  @Input() caritas: { name: string; image: string }[];
  @Output() caritaSelected = new EventEmitter<string>();

  selectedCarita: string | null = null;

  toggleSelection(caritaName: string) {
    if (this.selectedCarita === caritaName) {
      this.selectedCarita = null;
    } else {
      this.selectedCarita = caritaName;
    }

    this.caritaSelected.emit(this.selectedCarita);
  }
}
