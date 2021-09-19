import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class SubscribeComponent implements OnInit {

    location: any;
    subscribeClass: any;

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/index-4' || this.location == '/privacy-policy' || this.location == '/terms-conditions' || this.location == '/contact' || this.location == '/careers' || this.location == '/careers-details' || this.location == '/about'){
                    this.subscribeClass = 'subscribe-area';
                } else {
                    this.subscribeClass = 'subscribe-area bg-d8eafe';
                }
            }
        });
    }

    ngOnInit(): void {
    }

}