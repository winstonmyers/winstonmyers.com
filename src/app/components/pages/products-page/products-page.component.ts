import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-products-page',
    templateUrl: './products-page.component.html',
    styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

    productsList: number = 1;

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Shop');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Products List`
        }
    ]
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
        },
        {
            img: `assets/img/shop/products-img4.jpg`,
            title: `Dynamic Headphone`,
            newPrice: `$150.00`,
            oldPrice: ``,
            detailsLink: `products-details`
        },
        {
            img: `assets/img/shop/products-img5.jpg`,
            title: `Soldering Motherboard`,
            newPrice: `$241.00`,
            oldPrice: ``,
            detailsLink: `products-details`
        },
        {
            img: `assets/img/shop/products-img6.jpg`,
            title: `Premium Router`,
            newPrice: `$150.00`,
            oldPrice: `$100.00`,
            detailsLink: `products-details`
        },
        {
            img: `assets/img/shop/products-img4.jpg`,
            title: `Dynamic Headphone`,
            newPrice: `$150.00`,
            oldPrice: ``,
            detailsLink: `products-details`
        },
        {
            img: `assets/img/shop/products-img5.jpg`,
            title: `Soldering Motherboard`,
            newPrice: `$241.00`,
            oldPrice: ``,
            detailsLink: `products-details`
        },
        {
            img: `assets/img/shop/products-img6.jpg`,
            title: `Premium Router`,
            newPrice: `$150.00`,
            oldPrice: `$100.00`,
            detailsLink: `products-details`
        }
    ]

}