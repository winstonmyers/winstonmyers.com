import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-sign-up-page',
    templateUrl: './sign-up-page.component.html',
    styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Sign Up');
    }

    ngOnInit(): void {
    }

}