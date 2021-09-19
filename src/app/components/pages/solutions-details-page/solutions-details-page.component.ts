import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-solutions-details-page',
    templateUrl: './solutions-details-page.component.html',
    styleUrls: ['./solutions-details-page.component.scss']
})
export class SolutionsDetailsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Solutions Details');
    }

    ngOnInit(): void {
    }

}