import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';
import { AmenityComponent } from './amenity/amenity.component';
import { FloorComponent } from './floor/floor.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'amenity',
    component: AmenityComponent
  },
  {
    path: 'floor',
    component: FloorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false, preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
