import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map: mapboxgl.Map;
  private style = 'mapbox://styles/mapbox/outdoors-v9';
  private center: number[] = [48.381, 54.337];
  private zoom = 12;
  private pitch = 60;
  private bearing = 90;

  constructor() {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(environment.mapbox.accessToken);
  }

  private createMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: this.center,
      pitch: this.pitch,
      bearing: this.bearing,
    });
  }

  getMap() {
    if (!this.map) { this.createMap(); }
    return this.map;
  }
}
