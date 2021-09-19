import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-pricing-page',
    templateUrl: './pricing-page.component.html',
    styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Pricing');
    }

    ngOnInit(): void {
    }

}