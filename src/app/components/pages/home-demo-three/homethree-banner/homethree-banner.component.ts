import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerContent = [
        {
            title: `We Protect The World's Most Sensitive Data`,
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
            videoLink: `https://www.youtube.com/watch?v=bk7McNUjWgw`,
            img: `assets/img/banner-img3.png`
        }
    ]

}