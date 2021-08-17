import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent implements OnInit {

  public slides;

  constructor(private apiService: AppService) { }

  ngOnInit(): void {
    this.slides = [];
    this.apiService.doGet('api/allprojects/2').subscribe((res) => {
      const landingRes = Object.keys(res).map(key => res[key]);
      landingRes.forEach((landingImages: any) => {
        this.slides.push(landingImages.icon);
      });
    });
    console.log(this.slides);
  }

}
