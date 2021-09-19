import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    whyChooseUsImage = [
        {
            img: `assets/img/why-choose-us.jpg`
        }
    ]
    whyChooseUsContent = [
        {
            subTitle: `WHY CHOOSE US`,
            title: `We Different From Others Should Choose Us`,
            featuresList: [
                {
                    icon: `flaticon-computer`,
                    title: `Cyber Security Expert`,
                    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`
                },
                {
                    icon: `flaticon-call-center-agent`,
                    title: `Industry Expertise`,
                    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`
                },
                {
                    icon: `flaticon-hacker`,
                    title: `Remote Workers`,
                    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`
                }
            ]
        }
    ]

}