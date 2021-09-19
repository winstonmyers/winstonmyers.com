import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerContent = [
        {
            bgImage: `assets/img/main-banner1.jpg`,
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
            ]
        }
    ]

}