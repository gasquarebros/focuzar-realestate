import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd   } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {

  public currentRoute: any;
  public isTopMenuVisible = false;

  public isFullscreen = false;
  public hoveredId;

  @ViewChild('fs') fs: ElementRef;

  constructor(
    location: Location,
    private router: Router,
    private projectService: ProjectService) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.currentRoute = location.path();
      } else {
        this.currentRoute = '';
      }
      this.getTopMenuVisible();
    });
  }

  ngOnInit(): void {
    this.hoveredId = '';
  }

  getTopMenuVisible(): void {
    this.isTopMenuVisible = false;
    if (this.currentRoute === '/amenity') {
      this.isTopMenuVisible = true;
    }
  }


  toggleFullscreen(fullscreenValue): void {
    const elem = document.getElementById('page-layout');
    if (!document.fullscreenElement) {
      document.getElementById('page-layout').requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  hoveredItem(item): any {
    if (item) {
      this.hoveredId = item.id;
      this.projectService.setHoverId(item.id);
    } else {
      this.projectService.setHoverId('');
    }
  }

}
