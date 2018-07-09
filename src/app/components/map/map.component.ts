import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  lat: number;
  lon: number;
  accu: number;
  zoom: number;

  isTracking = false;

  constructor() { 
    this.track()
  }

  onChoseLocation($event) {
    console.log($event);
  }

  track() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        console.log("your position right now is:",position, "zoom: ", this.zoom)
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.accu = position.coords.accuracy;
        this.zoom = 15 - position.coords.accuracy / 1000; // here I need some other function to set zoom always somewhere between 15 and 20.
        console.log("zoom: ", this.zoom)
      });
    } else {
      alert("geolocalization yesn't working");
    }
  }




}
