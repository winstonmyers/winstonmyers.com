import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-awards-page',
    templateUrl: './awards-page.component.html',
    styleUrls: ['./awards-page.component.scss']
})
export class AwardsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Awards');
    }

    ngOnInit(): void {
    }

}