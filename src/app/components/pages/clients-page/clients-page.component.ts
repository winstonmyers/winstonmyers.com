import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-clients-page',
    templateUrl: './clients-page.component.html',
    styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Clients');
    }

    ngOnInit(): void {
    }

}