import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { ProjectService } from '../layout/services/project.service';

@Component({
  selector: 'app-amenity',
  templateUrl: './amenity.component.html',
  styleUrls: ['./amenity.component.css']
})
export class AmenityComponent implements OnInit, AfterViewInit, AfterContentInit {

  public project: any;
  public hover: any;
  public hoverID: any;

  @ViewChild('myCanvas', {static: false})
  myCanvas: ElementRef<HTMLCanvasElement>;

  @ViewChild('myimage', {static: false}) myimage: ElementRef<any>;

  public context: CanvasRenderingContext2D;

  public image: any;
  public pointsMap: any;

  constructor(private projectService: ProjectService ) { }

  ngOnInit(): void {
    this.project = [{"id":433,"name":"A1","imageUrl":"","mappingArea":"382,163,354,164,354,103,395,103,395,131,381,131","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-home-34","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/yoga-room/"},{"id":431,"name":"A2","imageUrl":"","mappingArea":"396,131,436,130,436,102,395,102","mappingShape":"poly","type":"block","referenece":1130,"icon":null,"video360Url":""},{"id":432,"name":"A4","imageUrl":"","mappingArea":"478,131,480,102,496,102,497,83,518,84,519,131","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-home-07","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/co-working/"},{"id":435,"name":"Reading Room","imageUrl":"","mappingArea":"805,189,818,180,828,191,815,200","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-06","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/reading-room/"},{"id":434,"name":"Kids Room","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-10","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/kids-play-area/"}];

    this.image = 'https://focuz-repo.s3.amazonaws.com/reales/Bharathi_homes_2/EMP.jpg';
    this.pointsMap = [];

    this.projectService.hoverItemChange.subscribe((value) => {
      this.hoverID = value;
    });
  }

  ngAfterViewInit(): void {

  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      const imgWidth = this.myimage.nativeElement.naturalWidth;
      const imgHeight = this.myimage.nativeElement.naturalHeight;
      this.project.forEach(element => {
        if (element.mappingArea) {
          const pointsSplit = element.mappingArea.split(',');
          let previous = '';
          let prev;
          let current;
          pointsSplit.forEach((points, index) => {
            if (index % 2 === 0) {
              if (previous !== '') {
                previous += ', ';
              }
              prev = (points * 100) / imgWidth + '%';
            } else {
              current = (points * 100) / imgHeight + '%';
              previous += prev + ' ' + current;
            }
          });
          this.pointsMap.push({id: element.id, name: element.name, points: previous});
        }
      });
    }, 500);
  }

  onItemClick(item): void {
    console.log('item clicked', item);
  }

  onMapHover(item): void {
    this.hoverID = item.id;
    this.projectService.setHoverId(item.id);
  }

}
