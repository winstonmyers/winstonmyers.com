import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-blog-grid-page',
    templateUrl: './blog-grid-page.component.html',
    styleUrls: ['./blog-grid-page.component.scss']
})
export class BlogGridPageComponent implements OnInit {

    blogGrid: number = 1;

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Blog Grid');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Blog Grid`
        }
    ]
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
        },
        {
            mainImage: `assets/img/blog/blog-img4.jpg`,
            detailsLink: `blog-details`,
            title: `5 things you can do to secure your home office`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `Office`,
            authorName: `John`,
            linkText: `READ MORE`
        },
        {
            mainImage: `assets/img/blog/blog-img5.jpg`,
            detailsLink: `blog-details`,
            title: `Election (in)security: What you may have missed`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `Security`,
            authorName: `Taylor`,
            linkText: `READ MORE`
        },
        {
            mainImage: `assets/img/blog/blog-img6.jpg`,
            detailsLink: `blog-details`,
            title: `IoT cyber security: Are we finally turning the corner?`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `IoT`,
            authorName: `Sarah`,
            linkText: `READ MORE`
        },
        {
            mainImage: `assets/img/blog/blog-img4.jpg`,
            detailsLink: `blog-details`,
            title: `5 things you can do to secure your home office`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `Office`,
            authorName: `John`,
            linkText: `READ MORE`
        },
        {
            mainImage: `assets/img/blog/blog-img5.jpg`,
            detailsLink: `blog-details`,
            title: `Election (in)security: What you may have missed`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `Security`,
            authorName: `Taylor`,
            linkText: `READ MORE`
        },
        {
            mainImage: `assets/img/blog/blog-img6.jpg`,
            detailsLink: `blog-details`,
            title: `IoT cyber security: Are we finally turning the corner?`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
            tag: `IoT`,
            authorName: `Sarah`,
            linkText: `READ MORE`
        },
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