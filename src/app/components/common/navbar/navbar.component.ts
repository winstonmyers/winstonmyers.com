import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class NavbarComponent implements OnInit {

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    location: any;
    navbarClass: any;
    containerClass: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/index-4'){
                    this.containerClass = 'container';
                } else {
                    this.containerClass = 'container-fluid';
                }
            } else {
                this.location = this.router.url;
                if (this.location == '/index-4'){
                    this.navbarClass = 'navbar-area navbar-style-three';
                } else if (this.location == '/index-3'){
                    this.navbarClass = 'navbar-area navbar-style-two';
                } else {
                    this.navbarClass = 'navbar-area';
                }
            }
        });
    }

    ngOnInit(): void {
    }

}