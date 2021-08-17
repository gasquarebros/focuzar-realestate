import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMiddleThreesixtyviewComponent } from './page-middle-threesixtyview.component';

describe('PageMiddleThreesixtyviewComponent', () => {
  let component: PageMiddleThreesixtyviewComponent;
  let fixture: ComponentFixture<PageMiddleThreesixtyviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMiddleThreesixtyviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMiddleThreesixtyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
