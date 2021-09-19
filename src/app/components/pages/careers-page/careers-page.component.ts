import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-careers-page',
    templateUrl: './careers-page.component.html',
    styleUrls: ['./careers-page.component.scss']
})
export class CareersPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Careers');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Careers`
        }
    ]
    singleJobsItem = [
        {
            title: `Customer Success Manager - SMB`,
            paragraph: `Meet Our Leadership Preparing For Your Business Success.`,
            linkText: `APPLY NOW`,
            link: `careers-details`
        },
        {
            title: `Backend Engineer - CX Team`,
            paragraph: `Meet Our Leadership Preparing For Your Business Success.`,
            linkText: `APPLY NOW`,
            link: `careers-details`
        },
        {
            title: `Backend Engineer - EX Team`,
            paragraph: `Meet Our Leadership Preparing For Your Business Success.`,
            linkText: `APPLY NOW`,
            link: `careers-details`
        },
        {
            title: `Front End Engineer - EX Team`,
            paragraph: `Meet Our Leadership Preparing For Your Business Success.`,
            linkText: `APPLY NOW`,
            link: `careers-details`
        },
        {
            title: `Business Development Representative`,
            paragraph: `Meet Our Leadership Preparing For Your Business Success.`,
            linkText: `APPLY NOW`,
            link: `careers-details`
        },
        {
            title: `Senior Marketing Paid Media Specialist`,
            paragraph: `Meet Our Leadership Preparing For Your Business Success.`,
            linkText: `APPLY NOW`,
            link: `careers-details`
        }
    ]

}