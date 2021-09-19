import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-related-products',
    templateUrl: './related-products.component.html',
    styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleProductsBox = [
        {
            img: `assets/img/shop/products-img1.jpg`,
            title: `Wireless Router`,
            newPrice: `$250.00`,
            oldPrice: `$321.00`,
            detailsLink: `products-details`
        },
        {
            img: `assets/img/shop/products-img2.jpg`,
            title: `Spy Secure`,
            newPrice: `$200.00`,
            oldPrice: ``,
            detailsLink: `products-details`
        },
        {
            img: `assets/img/shop/products-img3.jpg`,
            title: `White CCTV`,
            newPrice: `$200.00`,
            oldPrice: `$210.00`,
            detailsLink: `products-details`
        }
    ]

}