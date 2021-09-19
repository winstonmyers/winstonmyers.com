import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-lets-talk',
    templateUrl: './lets-talk.component.html',
    styleUrls: ['./lets-talk.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class LetsTalkComponent implements OnInit {

    location: any;
    letsTalkClass: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/index-2'){
                    this.letsTalkClass = 'lets-talk-area bg-f5f5f5 ptb-100 pb-extra';
                } else if (this.location == '/index-3') {
                    this.letsTalkClass = 'lets-talk-area bg-d8eafe ptb-100';
                } else {
                    this.letsTalkClass = 'lets-talk-area ptb-100';
                }
            }
        });
    }

    ngOnInit(): void {
    }

    letsTalkContent = [
        {
            title: `Discuss Your Cyber Security Needs`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            buttonLink: `contact`,
            buttonText: `LET'S TALK` 
        }
    ]

}