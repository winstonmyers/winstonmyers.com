import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFunfacts = [
        {
            icon: `flaticon-handshake`,
            number: `3500`,
            sign: `+`,
            subText: `Customers Served Globally`
        },
        {
            icon: `flaticon-suitcase`,
            number: `2500`,
            sign: `+`,
            subText: `Cybersecurity Projects`
        },
        {
            icon: `flaticon-refresh`,
            number: `95`,
            sign: `%`,
            subText: `Customer Retention Rate`
        },
        {
            icon: `flaticon-group`,
            number: `350`,
            sign: `+`,
            subText: `Cybersecurity Experts`
        }
    ]

}