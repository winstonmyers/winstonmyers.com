import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-services-details-page',
    templateUrl: './services-details-page.component.html',
    styleUrls: ['./services-details-page.component.scss']
})
export class ServicesDetailsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Services Details');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Application Security Consulting`
        }
    ]
    servicesDetailsContent = [
        {
            title: `Virtual Chief Information Security Officer Services`,
            paragraphList: [
                {
                    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`
                },
                {
                    paragraph: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                }
            ]
        }
    ]
    servicesDetailsVideo = [
        {
            buttonText: `CONTACT US`,
            buttonLink: `contact`
        }
    ]

}