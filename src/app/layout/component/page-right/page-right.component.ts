import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-right',
  templateUrl: './page-right.component.html',
  styleUrls: ['./page-right.component.css']
})
export class PageRightComponent implements OnInit {

  public backgroundScrollerColor: any;
  public hoverbackgroundScrollerColor: any;
  public textScrollerColor: any;
  public hovertextScrollerColor: any;

  public isFullscreen = false;
  @Output() fullScreenChange = new EventEmitter();

  @Output() selectedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.backgroundScrollerColor = 'green';
    this.hoverbackgroundScrollerColor = 'white';
    this.textScrollerColor = 'white';
    this.hovertextScrollerColor = '#FF6600';
  }

  fullscreen(): any {
    this.isFullscreen = !this.isFullscreen;
    this.fullScreenChange.emit(this.isFullscreen);
  }

  selectElement(item): any {
    this.selectedItem.emit(item);
  }

}
