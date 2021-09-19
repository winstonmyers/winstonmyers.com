import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Gallery');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Gallery`
        }
    ]
    galleryItem = [
        {
            img: `assets/img/gallery/gallery1.jpg`
        },
        {
            img: `assets/img/gallery/gallery2.jpg`
        },
        {
            img: `assets/img/gallery/gallery3.jpg`
        },
        {
            img: `assets/img/gallery/gallery4.jpg`
        },
        {
            img: `assets/img/gallery/gallery5.jpg`
        },
        {
            img: `assets/img/gallery/gallery6.jpg`
        },
        {
            img: `assets/img/gallery/gallery7.jpg`
        },
        {
            img: `assets/img/gallery/gallery8.jpg`
        },
        {
            img: `assets/img/gallery/gallery9.jpg`
        }
    ]

}