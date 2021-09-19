import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    partnerItem = [
        {
            img: `assets/img/partner/partner-img1.png`
        },
        {
            img: `assets/img/partner/partner-img2.png`
        },
        {
            img: `assets/img/partner/partner-img3.png`
        },
        {
            img: `assets/img/partner/partner-img4.png`
        }
    ]

    partnerSlides: OwlOptions = {
        loop: true,
		nav: false,
		dots: false,
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
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 4
			}
		}
    }

}