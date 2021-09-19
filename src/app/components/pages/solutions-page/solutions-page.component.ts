import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-solutions-page',
    templateUrl: './solutions-page.component.html',
    styleUrls: ['./solutions-page.component.scss']
})
export class SolutionsPageComponent implements OnInit {

    caseStudiesGrid: number = 1;

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Solutions');
    }

    ngOnInit(): void {
    }
    
    pageTitle = [
        {
            pageTitle: `Solutions`
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
        },
        {
            img: `assets/img/case-studies/case-studies4.jpg`,
            date: `03 Dec, 2020`,
            title: `Customer Success Packages`,
            linkText: `READ MORE`,
            link: `solutions-details`
        },
        {
            img: `assets/img/case-studies/case-studies5.jpg`,
            date: `02 Dec, 2020`,
            title: `Scenario-Based Testing`,
            linkText: `READ MORE`,
            link: `solutions-details`
        },
        {
            img: `assets/img/case-studies/case-studies6.jpg`,
            date: `01 Dec, 2020`,
            title: `Application Security Consulting`,
            linkText: `READ MORE`,
            link: `solutions-details`
        },
        {
            img: `assets/img/case-studies/case-studies4.jpg`,
            date: `03 Dec, 2020`,
            title: `Customer Success Packages`,
            linkText: `READ MORE`,
            link: `solutions-details`
        },
        {
            img: `assets/img/case-studies/case-studies3.jpg`,
            date: `01 Dec, 2020`,
            title: `Detect & Prevent Solution`,
            linkText: `READ MORE`,
            link: `solutions-details`
        },
        {
            img: `assets/img/case-studies/case-studies6.jpg`,
            date: `01 Dec, 2020`,
            title: `Application Security Consulting`,
            linkText: `READ MORE`,
            link: `solutions-details`
        }
    ]

}