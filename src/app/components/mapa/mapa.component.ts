import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';

declare var google: any; // Agrega esta línea para declarar la variable global

@Component({
  selector: 'app-map',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  @Output() locationSelected = new EventEmitter<{ lat: number; lng: number }>();

  private map: any;
  private marker: any;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

    this.map.addListener('click', (event: any) => {
      const selectedLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() };

      if (this.marker) {
        this.marker.setMap(null);
      }

      this.marker = new google.maps.Marker({
        position: selectedLocation,
        map: this.map,
        title: 'Selected Location'
      });

      this.locationSelected.emit(selectedLocation);
    });
  }
}