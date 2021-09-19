import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-careers-details-page',
    templateUrl: './careers-details-page.component.html',
    styleUrls: ['./careers-details-page.component.scss']
})
export class CareersDetailsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Careers Details');
    }

    ngOnInit(): void {
    }

}