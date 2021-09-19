import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    testimonialsImage = [
        {
            mainImg: `assets/img/testimonials.jpg`
        }
    ]
    sectionTitle = [
        {
            subTitle: `TESTIMONIALS`,
            title: `Our Clients Feedback`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]
    singleTestimonialsItem = [
        {
            feedbackText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
            userImg: `assets/img/user/user1.jpg`,
            userName: `Jason Doe`,
            userDesignation: `Web Developer`
        },
        {
            feedbackText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
            userImg: `assets/img/user/user2.jpg`,
            userName: `Sarah Taylor`,
            userDesignation: `Web Designer`
        },
        {
            feedbackText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
            userImg: `assets/img/user/user3.jpg`,
            userName: `James Anderson`,
            userDesignation: `CEO`
        }
    ]

    testimonialsSlides: OwlOptions = {
		items: 1,
        loop: true,
		nav: false,
		dots: true,
		margin: 30,
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