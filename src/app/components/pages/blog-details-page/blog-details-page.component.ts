import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Blog Details');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `How to stay safe when paying with your phone`
        }
    ]

}