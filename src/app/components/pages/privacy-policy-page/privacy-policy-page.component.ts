import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-privacy-policy-page',
    templateUrl: './privacy-policy-page.component.html',
    styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Privacy Policy');
    }

    ngOnInit(): void {
    }

}