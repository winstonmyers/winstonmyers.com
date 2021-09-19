import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team-style-one',
    templateUrl: './team-style-one.component.html',
    styleUrls: ['./team-style-one.component.scss']
})
export class TeamStyleOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            subTitle: `OUR EXPERTS`,
            title: `Meet Our Leadership Preparing For Your Business Success`
        }
    ]
    singleTeamBox = [
        {
            img: `assets/img/team/team1.jpg`,
            name: `Sarah Taylor`,
            designation: `CEO & Founder`,
            social: [
                {
                    icon: `bx bxl-facebook`,
                    link:  `#`,
                    extraClass: `facebook`
                },
                {
                    icon: `bx bxl-twitter`,
                    link:  `#`,
                    extraClass: `twitter`
                },
                {
                    icon: `bx bxl-instagram`,
                    link:  `#`,
                    extraClass: `instagram`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link:  `#`,
                    extraClass: `linkedin`
                }
            ]
        },
        {
            img: `assets/img/team/team2.jpg`,
            name: `Jason Statham`,
            designation: `Marketing Manager`,
            social: [
                {
                    icon: `bx bxl-facebook`,
                    link:  `#`,
                    extraClass: `facebook`
                },
                {
                    icon: `bx bxl-twitter`,
                    link:  `#`,
                    extraClass: `twitter`
                },
                {
                    icon: `bx bxl-instagram`,
                    link:  `#`,
                    extraClass: `instagram`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link:  `#`,
                    extraClass: `linkedin`
                }
            ]
        },
        {
            img: `assets/img/team/team3.jpg`,
            name: `Daisy Lucy`,
            designation: `Lead Designer`,
            social: [
                {
                    icon: `bx bxl-facebook`,
                    link:  `#`,
                    extraClass: `facebook`
                },
                {
                    icon: `bx bxl-twitter`,
                    link:  `#`,
                    extraClass: `twitter`
                },
                {
                    icon: `bx bxl-instagram`,
                    link:  `#`,
                    extraClass: `instagram`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link:  `#`,
                    extraClass: `linkedin`
                }
            ]
        },
        {
            img: `assets/img/team/team4.jpg`,
            name: `Joe Root`,
            designation: `Lead Developer`,
            social: [
                {
                    icon: `bx bxl-facebook`,
                    link:  `#`,
                    extraClass: `facebook`
                },
                {
                    icon: `bx bxl-twitter`,
                    link:  `#`,
                    extraClass: `twitter`
                },
                {
                    icon: `bx bxl-instagram`,
                    link:  `#`,
                    extraClass: `instagram`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link:  `#`,
                    extraClass: `linkedin`
                }
            ]
        },
        {
            img: `assets/img/team/team5.jpg`,
            name: `James Anderson`,
            designation: `Web Developer`,
            social: [
                {
                    icon: `bx bxl-facebook`,
                    link:  `#`,
                    extraClass: `facebook`
                },
                {
                    icon: `bx bxl-twitter`,
                    link:  `#`,
                    extraClass: `twitter`
                },
                {
                    icon: `bx bxl-instagram`,
                    link:  `#`,
                    extraClass: `instagram`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link:  `#`,
                    extraClass: `linkedin`
                }
            ]
        },
        {
            img: `assets/img/team/team6.jpg`,
            name: `Lina Lucy`,
            designation: `UX/UI Designer`,
            social: [
                {
                    icon: `bx bxl-facebook`,
                    link:  `#`,
                    extraClass: `facebook`
                },
                {
                    icon: `bx bxl-twitter`,
                    link:  `#`,
                    extraClass: `twitter`
                },
                {
                    icon: `bx bxl-instagram`,
                    link:  `#`,
                    extraClass: `instagram`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link:  `#`,
                    extraClass: `linkedin`
                }
            ]
        },
        {
            img: `assets/img/team/team7.jpg`,
            name: `David Warner`,
            designation: `UX/UI Designer`,
            social: [
                {
                    icon: `bx bxl-facebook`,
                    link:  `#`,
                    extraClass: `facebook`
                },
                {
                    icon: `bx bxl-twitter`,
                    link:  `#`,
                    extraClass: `twitter`
                },
                {
                    icon: `bx bxl-instagram`,
                    link:  `#`,
                    extraClass: `instagram`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link:  `#`,
                    extraClass: `linkedin`
                }
            ]
        },
        {
            img: `assets/img/team/team8.jpg`,
            name: `Amy Jones`,
            designation: `Web Developer`,
            social: [
                {
                    icon: `bx bxl-facebook`,
                    link:  `#`,
                    extraClass: `facebook`
                },
                {
                    icon: `bx bxl-twitter`,
                    link:  `#`,
                    extraClass: `twitter`
                },
                {
                    icon: `bx bxl-instagram`,
                    link:  `#`,
                    extraClass: `instagram`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link:  `#`,
                    extraClass: `linkedin`
                }
            ]
        }
    ]
    
    teamSlides: OwlOptions = {
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
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
    }

}