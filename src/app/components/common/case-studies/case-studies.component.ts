import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-case-studies',
    templateUrl: './case-studies.component.html',
    styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            subTitle: `CASE STUDIES`,
            title: `Discover Our Latest Resources`
        }
    ]
    singleCaseStudiesBox = [
        {
            img: `assets/img/case-studies/case-studies1.jpg`,
            date: `03 Dec, 2020`,
            title: `Cloud Security Consulting`,
            linkText: `READ MORE`,
            link: `solutions-details`
        },
        {
            img: `assets/img/case-studies/case-studies2.jpg`,
            date: `02 Dec, 2020`,
            title: `Security Controls Assessment`,
            linkText: `READ MORE`,
            link: `solutions-details`
        },
        {
            img: `assets/img/case-studies/case-studies3.jpg`,
            date: `01 Dec, 2020`,
            title: `Detect & Prevent Solution`,
            linkText: `READ MORE`,
            link: `solutions-details`
        }
    ]

}