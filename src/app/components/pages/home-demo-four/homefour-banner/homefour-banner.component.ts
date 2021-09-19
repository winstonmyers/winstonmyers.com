import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefour-banner',
    templateUrl: './homefour-banner.component.html',
    styleUrls: ['./homefour-banner.component.scss']
})
export class HomefourBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerContent = [
        {
            title: `Advancing Security Worldwide`,
            paragraphList: [
                {
                    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Data protection security network technology.`
                },
                {
                    paragraph: `Meet Our Leadership Preparing For Your Business Success.`
                }
            ],
            buttonText: `GET STARTED`,
            buttonLink: `contact`,
            img: `assets/img/banner-img4.png`
        }
    ]

}