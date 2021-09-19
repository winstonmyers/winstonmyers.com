import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-sign-in-page',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Sign In');
    }

    ngOnInit(): void {
    }

}