import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            subTitle: `OUR SERVICES AREA`,
            title: `We Offer Professional Security Solutions For Business`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]
    singleServicesBox = [
        {
            icon: `flaticon-bank`,
            title: `Banking`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-manufacturing`,
            title: `Manufacturing`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-oil-1`,
            title: `Oil And Gas`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-antivirus`,
            title: `Network Assessment`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-keywords`,
            title: `Host & End Point`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-protection`,
            title: `Cloud & Virtualization`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        }
    ]

    servicesSlides: OwlOptions = {
        loop: true,
		nav: false,
		dots: true,
		margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
    }

}