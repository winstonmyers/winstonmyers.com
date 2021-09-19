import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class TopHeaderComponent implements OnInit {

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    location: any;
    topHeaderClass: any;
    containerClass: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/index-2'){
                    this.topHeaderClass = 'top-header-area bg-black';
                    this.containerClass = 'container-fluid';
                } else if (this.location == '/index-4'){
                    this.topHeaderClass = 'top-header-area';
                    this.containerClass = 'container';
                } else {
                    this.topHeaderClass = 'top-header-area';
                    this.containerClass = 'container-fluid';
                }
            }
        });
    }

    ngOnInit(): void {
    }

}