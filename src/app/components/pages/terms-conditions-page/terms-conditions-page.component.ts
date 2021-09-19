import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-terms-conditions-page',
    templateUrl: './terms-conditions-page.component.html',
    styleUrls: ['./terms-conditions-page.component.scss']
})
export class TermsConditionsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Terms & Conditions');
    }

    ngOnInit(): void {
    }

}