import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-sidebar-scroller',
  templateUrl: './sidebar-scroller.component.html',
  styleUrls: ['./sidebar-scroller.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarScrollerComponent implements OnInit {

  @Input() public backgroundColor: any;
  @Input() public hoverBackgroundColor: any;
  @Input() public textColor: any;
  @Input() public hoverTextColor: any;

  @Output() selectedElement: any = new EventEmitter();

  public items = [];

  constructor() { }

  ngOnInit(): void {
    const projectAmenities = [
        {"id":433,"name":"A1","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-home-34","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/yoga-room/"},
        {"id":432,"name":"A11","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-home-07","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/co-working/"},
        {"id":435,"name":"A123","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-06","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/reading-room/"},
        {"id":434,"name":"A1234","imageUrl":"","mappingArea":"","mappingShape":"poly","type":"video","referenece":0,"icon":"icon-navi-10","video360Url":"https://focuzar.com/demos/360/bharathiHomes/elements/animenities/kids-play-area/"}
    ];
    this.items = projectAmenities;
  }

  showPopover(item): void {
    item.hover = true;
    this.selectedElement.emit(item);
  }

  hidePopover(item): void {
    item.hover = false;
    this.selectedElement.emit();
  }

}
