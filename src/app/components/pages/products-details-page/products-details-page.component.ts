import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-products-details-page',
    templateUrl: './products-details-page.component.html',
    styleUrls: ['./products-details-page.component.scss']
})
export class ProductsDetailsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Products Details');
    }

    ngOnInit(): void {
    }

}