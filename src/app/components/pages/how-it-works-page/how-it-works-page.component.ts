import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-how-it-works-page',
    templateUrl: './how-it-works-page.component.html',
    styleUrls: ['./how-it-works-page.component.scss']
})
export class HowItWorksPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - How It Works');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `How It Works`
        }
    ]
    timelineContent = [
        {
            number: `01`,
            title: `Start Here`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.`
        },
        {
            number: `02`,
            title: `Testing`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.`
        },
        {
            number: `03`,
            title: `Final Report`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.`
        },
        {
            number: `04`,
            title: `Remediate`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.`
        },
        {
            number: `05`,
            title: `Rate`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.`
        },
        {
            number: `06`,
            title: `Repeat`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.`
        }
    ]

}