import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-features',
    templateUrl: './hometwo-features.component.html',
    styleUrls: ['./hometwo-features.component.scss']
})
export class HometwoFeaturesComponent implements OnInit {

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