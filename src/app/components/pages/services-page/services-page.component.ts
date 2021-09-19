import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Services');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Services`
        }
    ]

    singleServicesBox = [
        {
            icon: `flaticon-bank`,
            title: `Banking`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-manufacturing`,
            title: `Manufacturing`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-oil-1`,
            title: `Oil And Gas`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-antivirus`,
            title: `Network Assessment`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-keywords`,
            title: `Host & End Point`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-protection`,
            title: `Cloud & Virtualization`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-security`,
            title: `Prioritization`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-antivirus`,
            title: `Threat Prediction`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-automation`,
            title: `Automated Remediation`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        }
    ]

}