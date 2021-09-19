import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-leadership-page',
    templateUrl: './leadership-page.component.html',
    styleUrls: ['./leadership-page.component.scss']
})
export class LeadershipPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Leadership');
    }

    ngOnInit(): void {
    }
    
    pageTitle = [
        {
            pageTitle: `Our Leadership`
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

}