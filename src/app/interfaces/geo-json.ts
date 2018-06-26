import { Geometry } from 'geojson';
export interface GeoJson {
    type: string;
    geometry: Geometry;
    properties?: any;
    $key?: string;
}
