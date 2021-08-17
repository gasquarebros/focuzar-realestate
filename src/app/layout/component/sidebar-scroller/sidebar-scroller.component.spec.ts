import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarScrollerComponent } from './sidebar-scroller.component';

describe('SidebarScrollerComponent', () => {
  let component: SidebarScrollerComponent;
  let fixture: ComponentFixture<SidebarScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarScrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
