import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-blog',
    templateUrl: './homethree-blog.component.html',
    styleUrls: ['./homethree-blog.component.scss']
})
export class HomethreeBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleBlogPost = [
        {
            mainImage: `assets/img/blog/blog-img1.jpg`,
            detailsLink: `blog-details`,
            title: `How to stay safe when paying with your phone`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `Phone`,
            authorName: `John`,
            linkText: `READ MORE`
        },
        {
            mainImage: `assets/img/blog/blog-img2.jpg`,
            detailsLink: `blog-details`,
            title: `The worst passwords of 2020: Is it time to change yours?`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `Password`,
            authorName: `Taylor`,
            linkText: `READ MORE`
        },
        {
            mainImage: `assets/img/blog/blog-img3.jpg`,
            detailsLink: `blog-details`,
            title: `Cybersecurity careers: Which one is right for you?`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `Careers`,
            authorName: `Sarah`,
            linkText: `READ MORE`
        }
    ]

}