import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { AppService } from '../app.service';
import { ProjectService } from '../layout/services/project.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  zoom = 11;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markers: any;
  markerOptions = { draggable: false, animation: google.maps.Animation.BOUNCE };
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerTitle: string;
  markerContent: string;

  infoWindowIsOpen;


  public map: google.maps.Map;

  constructor(
    private apiService: AppService,
    private projectService: ProjectService) {

  }

  ngOnInit(): void {

    const url = 'api/getlocations/2';
    this.markers = [];
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 11,
    });

    this.apiService.doGet(url).subscribe((res) => {
      this.projectService.setLeftScrollerItems(res);
      this.addMarker(res);
      this.projectService.leftSelectedItems.subscribe((selectedItem) => {
        if (selectedItem) {
          let index = 0;
          this.markers.forEach((markerData: any) => {
            if (markerData.getLabel() === selectedItem.id.toString()) {
              console.log('index', index);
              console.log('sele', this.markers[index]);
              google.maps.event.trigger(markerData, 'mouseover');
            }
            index++;
          });
        } else {
          if (this.infoWindowIsOpen) {
            this.infoWindowIsOpen.close();
          }
          //this.hideHoverWindow(selectedItem);
        }
      });
    });
    /*this.apiService.doGet(url).subscribe((res) => {
      console.log(res);
      this.addMarker(res);
      this.projectService.setLeftScrollerItems(res);
      this.projectService.leftSelectedItems.subscribe((selectedItem) => {
        if (selectedItem) {
          let index = 0;
          this.markers.forEach((markerData: any) => {
            if (markerData.options.id === selectedItem.id) {
              console.log('index', index);
              console.log('sele', this.markers[index]);
              google.maps.event.addListener(this.markers[index], 'click', () => {
                alert('click');
                this.infoWindow.getPosition();
                this.markerTitle ='Hi';
                this.infoWindow.open(null);
              });
              
              google.maps.event.trigger(this.markers[index], 'click');
            }
            index++;
          });
        } else {
          this.hideHoverWindow(selectedItem);
        }
      });
    });*/
  }

  addMarker(markerData): void {
    if (markerData) {
      this.center = {
        lat: parseFloat(markerData[0].latitude),
        lng: parseFloat(markerData[0].longitude),
      };
      this.map.setCenter({lat: parseFloat(markerData[0].latitude), lng: parseFloat(markerData[0].longitude)});
      markerData.forEach((marker: any) => {

        const markerObject = new google.maps.Marker({
          position: { lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) },
          map: this.map,
          title: marker.name,
          label: marker.id.toString(),
          draggable: false,
          icon: marker.markerIcon
        });
        if (marker.isProject) {
          markerObject.setAnimation(google.maps.Animation.BOUNCE);
        }
        const contentString = '<h2 style="border-bottom: 1px solid #ccc;">' + marker.name + '</h2><i style="display: block; text-align: center;"><b>6km</b></i>';
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });
        markerObject.addListener('mouseover', () => {
          if (this.infoWindowIsOpen) {
            this.infoWindowIsOpen.close();
          }
          this.infoWindowIsOpen = infowindow;
          infowindow.open(this.map, markerObject);
        });
        markerObject.addListener('mouseout', () => {
          infowindow.close();
        });
        markerObject.addListener('click', () => {
          infowindow.close();
          this.markerClick(markerObject);
        });
        this.markers.push(markerObject);
      });
    }
  }

  openInfoWindow(marker): void {
    this.center = marker.getPosition();
    this.zoom = 15;
    this.infoWindow.open(marker);
  }

  showHoverWindow(marker): void {
    this.markerTitle = marker.marker.title;
    this.markerContent = '6KM';
    this.infoWindow.open(marker);
  }

  hideHoverWindow(marker): void {
    this.infoWindow.close();
  }

  markerClick(marker): void {
    console.log(marker);
  }

}
