import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-features',
    templateUrl: './homethree-features.component.html',
    styleUrls: ['./homethree-features.component.scss']
})
export class HomethreeFeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    featuresBox = [
        {
            icon: `flaticon-video-conference`,
            title: `Security Advisory`,
            paragraph: `Lorem ipsum dolor sit amet, elit hi it piscing, elit sed do hihi tempor incididunt ut labore.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-call-center-agent`,
            title: `Technical Assurance`,
            paragraph: `Lorem ipsum dolor sit amet, elit hi it piscing, elit sed do hihi tempor incididunt ut labore.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-cyber-security`,
            title: `Managed Services`,
            paragraph: `Lorem ipsum dolor sit amet, elit hi it piscing, elit sed do hihi tempor incididunt ut labore.`,
            link: `services-details`,
            linkText: `READ MORE`
        }
    ]

}