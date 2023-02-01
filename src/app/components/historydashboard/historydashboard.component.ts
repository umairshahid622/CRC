import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// @ts-ignore
import { OverlayPanel } from 'primeng';
import { Product } from '../../api/product';
import {
    CloudData,
    CloudOptions,
    ZoomOnHoverOptions,
} from 'angular-tag-cloud-module';

declare var google: any;
@Component({
    selector: 'app-historydashboard',
    templateUrl: './historydashboard.component.html',
    styleUrls: ['./historydashboard.component.scss'],
})
export class HistorydashboardComponent implements OnInit {
    constructor(private http: HttpClient, private r: Router) {
        console.log(localStorage.getItem('user'));
        if (
            !localStorage.getItem('user') ||
            localStorage.getItem('user') === ''
        ) {
            this.r.navigate(['/pages/login']);
        }
        http.get('http://109.205.182.203:5418').subscribe(
            (response) => {
                console.warn(response);
                this.redditTrends = response;
            },
            (err) => {
                console.warn(err);
            }
        );
    }
    redditTrends:any;
    optionsCloud: CloudOptions = {
        // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
        width: 0,
        // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
        height: 0,
        overflow: false,
    };

    zoomOnHoverOptions: ZoomOnHoverOptions = {
        scale: 1.3, // Elements will become 130 % of current zize on hover
        transitionTime: 1.2, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
        delay: 0.2, // Zoom will take affect after 0.8 seconds
    };

    dataCloud: CloudData[] = [
        { text: 'MinarEPakistan', weight: 2, color: '#4bc1e5' },
        { text: 'JusticForAsia', weight: 3, color: '#601ec6' },
        { text: 'ImranKhanPti', weight: 3, color: '#37d6ab' },
        { text: 'ShbaazGill', weight: 4, color: '#3d4f97' },
        { text: 'Twitter', weight: 5, color: '#37d6ab' },
        { text: 'Facebook', weight: 4, color: '#272f80' },
        { text: 'Engineer', weight: 4, color: '#37d6ab' },
        { text: 'NawazShareef', weight: 4, color: '#272f80' },
        { text: 'MaryamNawazz', weight: 3, color: '#5c549b' },
    ];

    basicOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
    };
    searchString = '';
    data5: any;
    data6: any;
    data7: any;
    basicData1: any;
    data2: any;
    options: any;
    overlays: Array<any>;
    display = false;
    display1 = false;
    lineStylesData: any;
    selectedElement: any;
    positive: number = 100;
    neutral: number = 70;
    neutral1: number = 20;
    neutral2: number = 50;
    neutral3: number = 30;
    negative: number = 40;
    negative1: number = 60;
    negative2: number = 50;
    negative3: number = 40;
    paymentOptions: any[];
    display2 = false;
    chartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
    };
    data: any;
    basicData: any;
    searchTypes = [
        { title: 'Social', value: 'social' },
        { title: 'Network', value: 'network' },
        { title: 'Marketing', value: 'marketing' },
    ];
    searchType = this.searchTypes[0];

    @ViewChild('op') op: OverlayPanel | undefined;

    selectedProducts: Product[];
    placeholder = [];
    sentiment;
    whatsHappening = [
        {
            topic: 'NPR',
            update: 'A new system to flag racist incidents and acts of hate is named after Emmett Till',
            code: 'RM',
            status: 'Last night',
            contentPic: 'assets/layout/images/Fa361lzaUAAcC8y.jpeg',
        },
        {
            topic: 'US elections',
            update: 'Latest updates and results from the August 23 primaries',
            code: 'LDN',
            status: 'LIVE',
            contentPic: 'assets/layout/images/Fa3O2zFX0AEdkaU.jpeg',
        },

        {
            topic: 'Television',
            update: 'Black Ink Crew: Chicago airing on VH1',
            code: 'PRS',
            status: 'Last Night',
            contentPic: 'assets/layout/images/mH9EmMbE.jpeg',
        },
    ];

    customers = [
        {
            username: '#Mureesparkletts',
            likes_count: '123',
            retweet_count: '321',
            picture:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tweet: 'A massive response from the record Haripur crowd on mobilisation for Tehreek e Haqeeqi Azadi. Thank you people of Haripur..',
        },
        {
            username: '#imrankhanpti',
            likes_count: '12k',
            retweet_count: '3k',
            picture:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tweet: 'A massive response from the record Haripur crowd on mobilisation for Tehreek e Haqeeqi Azadi. Thank you people of Haripur..',
        },
        {
            username: '#shahbazGill',
            likes_count: '20k',
            retweet_count: '5k',
            picture:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tweet: 'A massive response from the record Haripur crowd on mobilisation for Tehreek e Haqeeqi Azadi. Thank you people of Haripur..',
        },
        {
            username: '#عمران_خان_ہماری_ریڈ_لائن',
            likes_count: '55k',
            retweet_count: '10k',
            picture:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tweet: 'A massive response from the record Haripur crowd on mobilisation for Tehreek e Haqeeqi Azadi. Thank you people of Haripur..',
        },
        {
            username: '#MartialLaw',
            likes_count: '5k',
            retweet_count: '2k',
            picture:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tweet: 'A massive response from the record Haripur crowd on mobilisation for Tehreek e Haqeeqi Azadi. Thank you people of Haripur..',
        },
        {
            username: '#AmmarKaQatilKon',
            likes_count: '6k',
            retweet_count: '1k',
            picture:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tweet: 'A massive response from the record Haripur crowd on mobilisation for Tehreek e Haqeeqi Azadi. Thank you people of Haripur..',
        },
    ];

    tweetDialog = false;
    tweetDialog1 = false;
    tweetDialog2 = false;
    ngOnInit(): void {
        this.paymentOptions = [
            { name: 'Monthly', value: 'monthly' },
            { name: 'Day', value: 'day' },
            { name: 'Time', value: 'time' },
        ];
        this.basicData = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: '#EngineerMuhammadAliMirza',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#0077b6',
                    tension: 0.0,
                },
                {
                    label: 'internetdown',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#00b4d8',
                    tension: 0.0,
                },
                {
                    label: 'ImranKhanArrest',
                    data: [25, 46, 48, 91, 68, 72, 9],
                    fill: false,
                    borderColor: '#cdb4db',
                    tension: 0.0,
                },
            ],
        };
        this.basicData1 = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'Positive',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#264653',
                    tension: 0.1,
                },
                {
                    label: 'Negative',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#e9c46a',
                    tension: 0.1,
                },
                {
                    label: 'Neutral',
                    data: [25, 46, 48, 91, 68, 72, 9],
                    fill: false,
                    borderColor: '#2a9d8f',
                    tension: 0.1,
                },
            ],
        };
        this.data = {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [
                {
                    data: [150, 500, 250],
                    backgroundColor: ['#005f73', '#0a9396', '#ee9b00'],
                    hoverBackgroundColor: ['#edede9', '#81C784', '#FFB74D'],
                },
            ],
        };
        this.data2 = {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [
                {
                    data: [100, 10, 300],
                    backgroundColor: ['#005f73', '#0a9396', '#ee9b00'],
                    hoverBackgroundColor: ['#edede9', '#81C784', '#FFB74D'],
                },
            ],
        };
        this.data6 = {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [
                {
                    data: [20, 50, 80],
                    backgroundColor: ['#005f73', '#0a9396', '#ee9b00'],
                    hoverBackgroundColor: ['#edede9', '#81C784', '#FFB74D'],
                },
            ],
        };
    }

    openDialog(ele: any) {
        this.selectedElement = ele;
        this.display = true;
    }
    openDialog1(ele: any) {
        this.selectedElement = ele;
        this.display1 = true;
    }
    openDialog2(ele: any) {
        this.selectedElement = ele;
        this.display2 = true;
    }

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore

    // @ts-ignore
    value2: any;
    displayModal: boolean;
}
