import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home-demo-four',
    templateUrl: './home-demo-four.component.html',
    styleUrls: ['./home-demo-four.component.scss']
})
export class HomeDemoFourComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Home Demo 4');
    }

    ngOnInit(): void {
    }

    partnerSectionTitle = [
        {
            title: `Trusted by Top Brands`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]

}