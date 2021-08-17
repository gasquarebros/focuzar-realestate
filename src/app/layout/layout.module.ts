import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './component/page-layout/page-layout.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { PageFooterComponent } from './component/page-footer/page-footer.component';
import { PageLeftComponent } from './component/page-left/page-left.component';
import { PageRightComponent } from './component/page-right/page-right.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PageMiddleTopRightComponent } from '../page-middle-top-right/page-middle-top-right.component';
import { PageMiddleThreesixtyviewComponent } from '../page-middle-threesixtyview/page-middle-threesixtyview.component';
import { SidebarScrollerComponent } from './component/sidebar-scroller/sidebar-scroller.component';


@NgModule({
  declarations: [
    PageLayoutComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageLeftComponent,
    PageRightComponent,
    PageMiddleTopRightComponent,
    PageMiddleThreesixtyviewComponent,
    SidebarScrollerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgScrollbarModule,
    ScrollingModule
  ],
  exports: [
    PageLayoutComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageLeftComponent,
    PageRightComponent,
    PageMiddleTopRightComponent,
    PageMiddleThreesixtyviewComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
