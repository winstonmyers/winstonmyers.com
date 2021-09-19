import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    awardImage = [
        {
            img: `assets/img/award.png`
        }
    ]
    homeInnerContent = [
        {
            title: `Aim To Secure The Modern Internet`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas lacus vel facilisis.`,
            buttonBox: [
                {
                    buttonText: `GET STARTED`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                },
                {
                    buttonText: `SCHEDULE A DEMO`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                }
            ],
            img: `assets/img/banner-img1.png`
        },
        {
            title: `Trusted By Over 3,500 Organizations`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas lacus vel facilisis.`,
            buttonBox: [
                {
                    buttonText: `SCHEDULE A DEMO`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                },
                {
                    buttonText: `GET STARTED`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                }
            ],
            img: `assets/img/banner-img2.png`
        }
    ]

    homeSlides: OwlOptions = {
		loop: true,
		nav: true,
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