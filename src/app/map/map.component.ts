import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../services/map.service';
import * as turf from 'turf';

@Component({
  selector: 'st-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: mapboxgl.Map;
  @ViewChild('mapEl') private mapEl: ElementRef;

  private dropoffs: any;
  private pointHopper = {};

  constructor(private mapService: MapService) {
    this.dropoffs = turf.featureCollection([]);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.map = this.mapService.getMap();
    // this.map.addLayer({
    //   id: 'dropoffs-symbol',
    //   type: 'symbol',
    //   source: {
    //     data: this.dropoffs,
    //     type: 'geojson'
    //   },
    //   layout: {
    //     'icon-allow-overlap': true,
    //     'icon-ignore-placement': true,
    //     'icon-image': 'marker-15',
    //   }
    // });
    this.map.on('click', (e) => {
      // debugger

      this.newDropoff(this.map.unproject(e.point));
      this.updateDropoffs(this.dropoffs);
    });
  }

  updateDropoffs(geojson) {
    // this.map.getSource('dropoffs-symbol')
    //   .setData(geojson);
  }

  newDropoff(coords) {
    // Store the clicked point as a new GeoJSON feature with
    // two properties: `orderTime` and `key`
    const pt = turf.point(
      [coords.lng, coords.lat],
      {
        orderTime: Date.now(),
        key: Math.random()
      }
    );
    this.dropoffs.features.push(pt);
    this.pointHopper[pt.properties.key] = pt;

    // // Make a request to the Optimization API
    // $.ajax({
    //   method: 'GET',
    //   url: assembleQueryURL(),
    // }).done(function(data) {
    //   // Create a GeoJSON feature collection
    //   var routeGeoJSON = turf.featureCollection([turf.feature(data.trips[0].geometry)]);

    //   // If there is no route provided, reset
    //   if (!data.trips[0]) {
    //     routeGeoJSON = nothing;
    //   } else {
    //     // Update the `route` source by getting the route source
    //     // and setting the data equal to routeGeoJSON
    //     map.getSource('route')
    //       .setData(routeGeoJSON);
    //   }

    //   if (data.waypoints.length === 12) {
    //     window.alert('Maximum number of points reached. Read more at mapbox.com/api-documentation/#optimization.');
    //   }
    // });
  }
}
