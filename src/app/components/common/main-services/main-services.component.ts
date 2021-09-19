import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-main-services',
    templateUrl: './main-services.component.html',
    styleUrls: ['./main-services.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class MainServicesComponent implements OnInit {

    location: any;
    mainServicesClass: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/index-4'){
                    this.mainServicesClass = 'services-area pt-100 pb-70 bg-f9f9f9';
                } else {
                    this.mainServicesClass = 'services-area pt-100 pb-70';
                }
            }
        });
    }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: `Expert Support to Enhance Your Cyber Defense`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]
    singleMainServices = [
        {
			title: `Threat Detection Standard Service`,
			paragraphList: [
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				},
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				}
			],
            buttonLink: `services-details`,
            buttonText: `READ MORE`,
            img: `assets/img/services/services-img1.png`
		},
		{
            title: `Incident Responder Standard Service`,
			paragraphList: [
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				},
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				}
			],
            buttonLink: `services-details`,
            buttonText: `READ MORE`,
            img: `assets/img/services/services-img2.png`
		},
		{
            title: `Cyber Security Standard Service`,
			paragraphList: [
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				},
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				}
			],
            buttonLink: `services-details`,
            buttonText: `READ MORE`,
            img: `assets/img/services/services-img3.png`
		},
		{
            title: `Disaster Planning Standard Service`,
			paragraphList: [
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				},
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				}
			],
            buttonLink: `services-details`,
            buttonText: `READ MORE`,
            img: `assets/img/services/services-img4.png`
		},
		{
            title: `Threat Hunter Standard Service`,
			paragraphList: [
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				},
				{
					paragraph: `Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
				}
			],
            buttonLink: `services-details`,
            buttonText: `READ MORE`,
            img: `assets/img/services/services-img5.png`
        }
    ]

    mainServicesSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		margin: 30,
		dots: false,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
        autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			}
		}
    }

}