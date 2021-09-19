import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home-demo-three',
    templateUrl: './home-demo-three.component.html',
    styleUrls: ['./home-demo-three.component.scss']
})
export class HomeDemoThreeComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Home Demo 3');
    }

    ngOnInit(): void {
    }

}