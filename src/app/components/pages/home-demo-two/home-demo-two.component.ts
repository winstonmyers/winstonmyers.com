import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home-demo-two',
    templateUrl: './home-demo-two.component.html',
    styleUrls: ['./home-demo-two.component.scss']
})
export class HomeDemoTwoComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Home Demo 2');
    }

    ngOnInit(): void {
    }

}