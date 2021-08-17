import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  hoverItemChange: Subject<boolean> = new Subject<boolean>();

  leftScrollerItems: Subject<any> = new Subject<any>();

  leftSelectedItems: Subject<any> = new Subject<any>();

  public hoveredId;

  constructor() { }

  setHoverId(id): any {
    this.hoverItemChange.next(id);
  }

  setLeftScrollerItems(items): any {
    this.leftScrollerItems.next(items);
  }

  setLeftSelectedItems(item): any {
    this.leftSelectedItems.next(item);
  }
}
