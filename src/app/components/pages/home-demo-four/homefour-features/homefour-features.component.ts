import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-homefour-features',
	templateUrl: './homefour-features.component.html',
	styleUrls: ['./homefour-features.component.scss']
})
export class HomefourFeaturesComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	overviewBox = [
		{
			title: `Dynamic Cyber Security Platform`,
			paragraphList: [
                {
                    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
                },
                {
                    paragraph: `Meet Our Leadership Preparing For Your Business Success.`
                }
            ],
            buttonText: `LEARN MORE`,
            buttonLink: `services-details`,
			img: `assets/img/overview/overview-img1.png`
		},
		{
			title: `Explore Your Options`,
			paragraphList: [
                {
                    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
                },
                {
                    paragraph: `Meet Our Leadership Preparing For Your Business Success.`
                }
            ],
            buttonText: `LEARN MORE`,
            buttonLink: `services-details`,
			img: `assets/img/overview/overview-img2.png`
		},
		{
			title: `Always On, Always Accurate`,
			paragraphList: [
                {
                    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
                },
                {
                    paragraph: `Meet Our Leadership Preparing For Your Business Success.`
                }
            ],
            buttonText: `LEARN MORE`,
            buttonLink: `services-details`,
			img: `assets/img/overview/overview-img3.png`
		}
	]

}