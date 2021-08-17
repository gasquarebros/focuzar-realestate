import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMiddleTopRightComponent } from './page-middle-top-right.component';

describe('PageMiddleTopRightComponent', () => {
  let component: PageMiddleTopRightComponent;
  let fixture: ComponentFixture<PageMiddleTopRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMiddleTopRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMiddleTopRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
