import { MessageService } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../api/product';

// @ts-ignore
import { OverlayPanel } from 'primeng';
// @ts-ignore
import * as FileSaver from 'file-saver';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
declare var google: any;
import 'chartjs-plugin-zoom';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [MessageService],
})
export class DashboardComponent implements OnInit {
    constructor(
        private http: HttpClient,
        private r: Router,
        private messageService: MessageService
    ) {
        console.log(localStorage.getItem('user'));
        if (
            !localStorage.getItem('user') ||
            localStorage.getItem('user') === ''
        ) {
            this.r.navigate(['/pages/login']);
        }
        if (
            localStorage.getItem('keyword') &&
            localStorage.getItem('keyword') !== ''
        ) {
            this.searchString = localStorage.getItem('keyword');
            this.getData();
        }
    }

    basicOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
    };
    basicData: any;
    data: any;
    chartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
    };
    searchString = '';
    data5: any;
    data2: any;
    options: any;
    overlays: Array<any>;
    display = false;
    lineStylesData: any;
    lineStylesData1: any;
    lineStylesData2: any;
    selectedElement: any;
    search = '';
    apiview: any;
    loading = false;
    data1;
    data4;
    positive: number = 100;
    neutral: number = 70;
    negative: number = 40;
    datacontent = false;
    horizontalOptions: any;
    paymentOptions: any[];
    value2: any;
    value3: any;

    @ViewChild('op') op: OverlayPanel | undefined;
    customers = [];
    // topTweets = [];
    topTweets: [];
    selectedProducts: Product[];
    placeholder = [];
    sentiment;
    customers1 = [
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
        { hashtag: 'Muree sparkletts', uiquevists: '13k' },
    ];
    mentions = [
        {
            name: 'Henry Cavill',
            notificationCount: 'T',
            date: '2019-07-19',
            time: '15:15',
            socialLink: 'twitter.com',
            likes: '54k',
            comments: '10k',
            replays: '21k',
            bannerPic:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tags: [
                '#TheWitcher',
                '#Caralt',
                '#Yannifer',
                '#Netflix',
                '#AmazonPrime',
            ],
            organization: 'Student at Bahria University',
            designation: 'Angular Developer',
            location: 'Rawalpindi, Punjab, Pakistan',
            education: 'ICS (physics,maths,computer)',
            totalConnection: '546',
            dob: '20/09/2001',
            popularTweet:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Henry Cavill',
            notificationCount: '2',
            date: '2019-07-19',
            time: '15:15',
            socialLink: 'twitter.com',
            likes: '54k',
            comments: '10k',
            replays: '21k',
            bannerPic:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tags: [
                '#TheWitcher',
                '#Caralt',
                '#Yannifer',
                '#Netflix',
                '#AmazonPrime',
            ],
            organization: 'Student at Bahria University',
            designation: 'Angular Developer',
            location: 'Rawalpindi, Punjab, Pakistan',
            education: 'ICS (physics,maths,computer)',
            totalConnection: '546',
            dob: '20/09/2001',
            popularTweet:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Henry Cavill',
            notificationCount: '2',
            date: '2019-07-19',
            time: '15:15',
            socialLink: 'twitter.com',
            likes: '54k',
            comments: '10k',
            replays: '21k',
            bannerPic:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tags: [
                '#TheWitcher',
                '#Caralt',
                '#Yannifer',
                '#Netflix',
                '#AmazonPrime',
            ],
            organization: 'Student at Bahria University',
            designation: 'Angular Developer',
            location: 'Rawalpindi, Punjab, Pakistan',
            education: 'ICS (physics,maths,computer)',
            totalConnection: '546',
            dob: '20/09/2001',
            popularTweet:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Henry Cavill',
            notificationCount: '2',
            date: '2019-07-19',
            time: '15:15',
            socialLink: 'twitter.com',
            likes: '54k',
            comments: '10k',
            replays: '21k',
            bannerPic:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tags: [
                '#TheWitcher',
                '#Caralt',
                '#Yannifer',
                '#Netflix',
                '#AmazonPrime',
            ],
            organization: 'Student at Bahria University',
            designation: 'Angular Developer',
            location: 'Rawalpindi, Punjab, Pakistan',
            education: 'ICS (physics,maths,computer)',
            totalConnection: '546',
            dob: '20/09/2001',
            popularTweet:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Henry Cavill',
            notificationCount: '2',
            date: '2019-07-19',
            time: '15:15',
            socialLink: 'twitter.com',
            likes: '54k',
            comments: '10k',
            replays: '21k',
            bannerPic:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tags: [
                '#TheWitcher',
                '#Caralt',
                '#Yannifer',
                '#Netflix',
                '#AmazonPrime',
            ],
            organization: 'Student at Bahria University',
            designation: 'Angular Developer',
            location: 'Rawalpindi, Punjab, Pakistan',
            education: 'ICS (physics,maths,computer)',
            totalConnection: '546',
            dob: '20/09/2001',
            popularTweet:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Henry Cavill',
            notificationCount: '2',
            date: '2019-07-19',
            time: '15:15',
            socialLink: 'twitter.com',
            likes: '54k',
            comments: '10k',
            replays: '21k',
            bannerPic:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tags: [
                '#TheWitcher',
                '#Caralt',
                '#Yannifer',
                '#Netflix',
                '#AmazonPrime',
            ],
            organization: 'Student at Bahria University',
            designation: 'Angular Developer',
            location: 'Rawalpindi, Punjab, Pakistan',
            education: 'ICS (physics,maths,computer)',
            totalConnection: '546',
            dob: '20/09/2001',
            popularTweet:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Henry Cavill',
            notificationCount: '2',
            date: '2019-07-19',
            time: '15:15',
            socialLink: 'twitter.com',
            likes: '54k',
            comments: '10k',
            replays: '21k',
            bannerPic:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tags: [
                '#TheWitcher',
                '#Caralt',
                '#Yannifer',
                '#Netflix',
                '#AmazonPrime',
            ],
            organization: 'Student at Bahria University',
            designation: 'Angular Developer',
            location: 'Rawalpindi, Punjab, Pakistan',
            education: 'ICS (physics,maths,computer)',
            totalConnection: '546',
            dob: '20/09/2001',
            popularTweet:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Henry Cavill',
            notificationCount: '2',
            date: '2019-07-19',
            time: '15:15',
            socialLink: 'twitter.com',
            likes: '54k',
            comments: '10k',
            replays: '21k',
            bannerPic:
                'assets/360_F_428907158_MTQ0OhBiQOM80b08UtUMo0Q5wHO8wq29.jpg',
            tags: [
                '#TheWitcher',
                '#Caralt',
                '#Yannifer',
                '#Netflix',
                '#AmazonPrime',
            ],
            organization: 'Student at Bahria University',
            designation: 'Angular Developer',
            location: 'Rawalpindi, Punjab, Pakistan',
            education: 'ICS (physics,maths,computer)',
            totalConnection: '546',
            dob: '20/09/2001',
            popularTweet:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];

    cutomershastags = [];
    topTweets1 = [];
    ngOnInit(): void {
        // this.paymentOptions = [
        //     {name: 'Monthly', value: 'monthly'},
        //     {name: 'Day', value: 'day'},
        //     {name: 'Time', value: 'time'}
        // ];
        // this.value2=this.paymentOptions[0];
        this.options = {
            center: { lat: 36.890257, lng: 30.707417 },
            zoom: 12,
        };
        setTimeout(() => {
            const marker = new google.maps.Marker({
                position: { lat: 36.883707, lng: 30.689216 },
                title: 'Ataturk Park',
            });
            marker.addListener('click', (event: any) => {
                // @ts-ignore
                // tslint:disable-next-line:no-console
                console.log('aaaa');
                this.display = true;
                // this.op.toggle(event);
            });
            this.overlays = [
                // new google.maps.Marker ({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
                marker,
                new google.maps.Marker({
                    position: { lat: 36.885233, lng: 30.702323 },
                    title: 'Oldtown',
                }),
            ];
            // tslint:disable-next-line:align
        }, 1000);

        this.data1 = {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };
        this.data = {
            labels: ['Comments', 'RetweetCount', 'Likes Count'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };
        this.data5 = {
            labels: ['Comments', 'RetweetCount', 'Likes Count'],
            datasets: [
                {
                    data: [30, 50, 400],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };
        this.data2 = {
            labels: ['Comments', 'RetweetCount', 'Likes Count'],
            datasets: [
                {
                    data: [10, 250, 50],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        };
    }

    openDialog(ele: any) {
        this.selectedElement = ele;
        this.display = true;
    }

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore

    // @ts-ignore
    getColor(likescount: any) {
        2;
        switch (likescount) {
            case '20':
                return 'Red';
            case '25':
                return 'blue';
            case '30':
                return 'green';
        }
    }

    getData() {
        console.log(this.searchString);
        this.loading = true;
        this.http
            .get<any>(
                // 'http://109.205.182.203:5452/search='+this.searchString
                'http://109.205.182.203:5453/search=' + this.searchString
            )
            .subscribe(
                (data0) => {
                    this.placeholder = data0;
                    this.placeholder = [...this.placeholder];
                    this.getNextData();
                    // this.loading = false;
                },
                (err) => {
                    console.warn(err);
                    if (HttpErrorResponse.name) {
                        this.loading = false;
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Info',
                            detail: 'Connection Refused',
                        });
                    }
                }
            );
    }

    getNextData() {
        setTimeout(() => {
            this.loading = true;
            this.http
                .get<any>(
                    'http://109.205.182.203:5453/topusers/search=' +
                        this.searchString
                )
                .subscribe(
                    (data) => {
                        console.log(this.data);
                        this.customers = data;
                        this.customers = [...this.customers];
                        this.loading = false;
                        this.datacontent = true;
                    },
                    (err) => {
                        if (HttpErrorResponse.name) {
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Info',
                                detail: 'Connection Refused',
                            });
                        }
                    }
                );
        }, 1000);
        setTimeout(() => {
            this.loading = true;
            this.http
                .get<any>(
                    // 'http://109.205.182.203:5457/TweetType/'  //topusers
                    'http://109.205.182.203:5453/toptweets/search=' +
                        this.searchString
                )
                .subscribe(
                    (data1) => {
                        this.topTweets = data1;
                        console.log(this.data1);
                        this.topTweets = [...this.topTweets];
                        this.loading = false;
                        this.datacontent = true;
                    },
                    (err) => {
                        if (HttpErrorResponse.name) {
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Info',
                                detail: 'Connection Refused',
                            });
                        }
                    }
                );
        }, 1000);
        setTimeout(() => {
            this.loading = true;
            this.http
                .get<any>(
                    // 'http://109.205.182.203:5457/TweetType/'  //topusers
                    'http://109.205.182.203:5453/tophashtags/search=' +
                        this.searchString
                )
                .subscribe((data4) => {
                    this.cutomershastags = data4;
                    console.log(this.data4);
                    this.cutomershastags = [...this.cutomershastags];
                    this.loading = false;
                    this.datacontent = true;
                });
        }, 1000);
        this.loading = true;
        this.http
            .get<any>(
                'http://109.205.182.203:5453/dashboard/search=' +
                    this.searchString
            )
            .subscribe(
                (data2) => {
                    this.sentiment = data2;
                    this.sentiment = [...this.sentiment];
                    console.log(this.sentiment);
                    this.loading = false;
                    this.datacontent = true;
                },
                (err) => {
                    if (HttpErrorResponse.name) {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Info',
                            detail: 'Connection Refused',
                        });
                    }
                }
            );
        this.loading = true;
        this.http
            .get<any>(
                'http://109.205.182.203:5453/DateAnalysis/search=' +
                    this.searchString
            )
            .subscribe((postData) => {
                const lbls: Array<any> = [];
                const datas: Array<any> = [];
                // @ts-ignore
                let i = 0;
                postData.forEach(
                    (pd: { date: any; count: any }) => {
                        if (i < 25) {
                            lbls.push(pd.date);

                            datas.push(+pd.count);
                        }
                        i++;
                    },
                    (err) => {
                        if (HttpErrorResponse.name) {
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Info',
                                detail: 'Connection Refused',
                            });
                        }
                    }
                );

                this.lineStylesData = {
                    labels: lbls,
                    datasets: [
                        {
                            label: 'Social Media Data',
                            data: datas,
                            fill: true,
                            tension: 0.4,
                            borderColor: '#42A5F5',
                        },
                    ],
                };
                this.loading = false;
                this.datacontent = true;
            });
        this.http
            .get<any>(
                'http://109.205.182.203:5453/DateAnalysis/search=' +
                    this.searchString
            )
            .subscribe((postData) => {
                const lbls: Array<any> = [];
                const datas: Array<any> = [];
                // @ts-ignore
                let i = 0;
                postData.forEach((pd: { date: any; count: any }) => {
                    if (i < 25) {
                        lbls.push(pd.date);

                        datas.push(+pd.count);
                    }
                    i++;
                });

                this.lineStylesData1 = {
                    labels: lbls,
                    datasets: [
                        {
                            label: 'Social Media Data',
                            data: datas,
                            fill: true,
                            tension: 0.4,
                            borderColor: '#42A5F5',
                        },
                    ],
                };
                this.loading = false;
                this.datacontent = true;
            });
        this.http
            .get<any>(
                'http://109.205.182.203:5453/DateAnalysis/search=' +
                    this.searchString
            )
            .subscribe((postData) => {
                const lbls: Array<any> = [];
                const datas: Array<any> = [];
                // @ts-ignore
                let i = 0;
                postData.forEach((pd: { date: any; count: any }) => {
                    if (i < 25) {
                        lbls.push(pd.date);

                        datas.push(+pd.count);
                    }
                    i++;
                });

                this.lineStylesData2 = {
                    labels: lbls,
                    datasets: [
                        {
                            label: 'Social Media Data',
                            data: datas,
                            fill: true,
                            tension: 0.4,
                            borderColor: '#42A5F5',
                        },
                    ],
                };
                this.loading = false;
                this.datacontent = true;
            });
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
                    label: 'Postive',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#7CFC00',
                    tension: 0.4,
                },
                {
                    label: 'Negative',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#ff0000',
                    tension: 0.4,
                },
                {
                    label: 'Neutral',
                    data: [25, 46, 48, 91, 68, 72, 9],
                    fill: true,
                    borderColor: '#FFA726',
                    tension: 0.4,
                },
            ],
        };
    }
}
