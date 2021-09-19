import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    singleBlogPost = [
        {
            mainImage: `assets/img/blog/blog-img1.jpg`,
            detailsLink: `blog-details`,
            title: `5 things you can do to secure your home office without hiring an expert`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            tag: `Office`,
            authorName: `John Smith`
        }
    ]

    singleBlogItem = [
        {
            mainImage: `assets/img/blog/blog-img2.jpg`,
            detailsLink: `blog-details`,
            title: `Cyber Security Awareness Month is here!`,
            paragraph: `Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
            tag: `Security`,
            authorName: `David Warner`
        },
        {
            mainImage: `assets/img/blog/blog-img3.jpg`,
            detailsLink: `blog-details`,
            title: `5 tips for better Google Drive security in 2020`,
            paragraph: `Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
            tag: `Google`,
            authorName: `James Andy`
        },
        {
            mainImage: `assets/img/blog/blog-img4.jpg`,
            detailsLink: `blog-details`,
            title: `5 ways cybercriminals can try to extort you`,
            paragraph: `Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
            tag: `Cyber`,
            authorName: `Sarah`
        }
    ]

}