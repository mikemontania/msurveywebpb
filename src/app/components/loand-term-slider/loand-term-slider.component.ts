import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loand-term-slider',
  templateUrl: './loand-term-slider.component.html',
  styleUrls: ['./loand-term-slider.component.css']
})
export class LoandTermSliderComponent implements OnInit {
  @Input() initialValue: number;
  @Output() initialValueChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() obligatory: boolean;
  marginValue: number;
  sliderValue: number;
  unitDisplayText: string;

  constructor() {
    this.marginValue = 0;
    this.sliderValue = this.minValue || 1;
   }

  ngOnInit(): void {
    if (this.initialValue) {
      this.sliderValue = this.initialValue;
      this.updateSlider();
    }
  }

  onSliderChange(): void {
    this.updateSlider();
    this.initialValueChange.emit(this.sliderValue);
  }

  private updateSlider(): void {
    this.marginValue = ((this.sliderValue - this.minValue) / (this.maxValue - this.minValue)) * 100;

    if (this.sliderValue === this.maxValue) {
      this.marginValue -= 6;

      if (window.innerWidth < 993) {
        this.marginValue -= 6;
      }
    }

   }
}
