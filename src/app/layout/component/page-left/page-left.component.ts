import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-page-left',
  templateUrl: './page-left.component.html',
  styleUrls: ['./page-left.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLeftComponent implements OnInit {

  public projectTitle: any;
  public items = [];

  @Input()
  public popupOver: boolean;

  @Input()
  public popupOverText;

  @Output() selectedElement = new EventEmitter();

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor(
    private projectService: ProjectService,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.popupOver = false;
    this.projectTitle = 'Projects';
    this.items = [];
    this.getItems();
    /*
    let projectAmenities = [
        {"id":433,"name":"Yoga Room","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-home-34","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/yoga-room/"},
        {"id":432,"name":"Co Working","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-home-07","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/co-working/"},
        {"id":435,"name":"Reading Room","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-06","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/reading-room/"},
        {"id":434,"name":"Kids Room","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-10","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/kids-play-area/"}
    ];
    this.items = projectAmenities;
    */
  }

  getItems(): any {
    this.projectService.leftScrollerItems.subscribe((data) => {
      console.log('data', data);
      this.items = data;
      this.items.push({"id":433,"name":"Yoga Room","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-home-34","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/yoga-room/"});
      this.cd.detectChanges();
      console.log(this.items);
    });
  }

  showPopover(item): void {
    this.popupOver = true;
    this.popupOverText = item.name;
    this.selectedElement.emit(item);
    this.projectService.setLeftSelectedItems(item);
  }

  hidePopover(): void {
    this.popupOver = false;
    this.popupOverText = '';
    this.selectedElement.emit('');
    this.projectService.setLeftSelectedItems('');
  }

}
