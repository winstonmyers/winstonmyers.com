import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - FAQ');
    }

    ngOnInit(): void {
    }

}