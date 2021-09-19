import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-features',
    templateUrl: './homeone-features.component.html',
    styleUrls: ['./homeone-features.component.scss']
})
export class HomeoneFeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFeaturesBox = [
        {
            icon: `flaticon-video-conference`,
            title: `Security Advisory`,
            paragraph: `Lorem ipsum dolor sit amet, elit hi it adipiscing, sed do eiusmd tempor incididunt ut labore. Quis ipsum suspen disse ipsum.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-call-center-agent`,
            title: `Technical Assurance`,
            paragraph: `Lorem ipsum dolor sit amet, elit hi it adipiscing, sed do eiusmd tempor incididunt ut labore. Quis ipsum suspen disse ipsum.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-cyber-security`,
            title: `Managed Services`,
            paragraph: `Lorem ipsum dolor sit amet, elit hi it adipiscing, sed do eiusmd tempor incididunt ut labore. Quis ipsum suspen disse ipsum.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-hacker`,
            title: `Remote Workers`,
            paragraph: `Lorem ipsum dolor sit amet, elit hi it adipiscing, sed do eiusmd tempor incididunt ut labore. Quis ipsum suspen disse ipsum.`,
            link: `services-details`,
            linkText: `READ MORE`
        }
    ]

}