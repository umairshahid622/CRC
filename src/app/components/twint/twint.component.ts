import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-twint',
  templateUrl: './twint.component.html',
  styleUrls: ['./twint.component.scss']
})
export class TwintComponent implements OnInit {
    constructor(private http:HttpClient,private ar: ActivatedRoute,
                private r: Router) {
        console.log(localStorage.getItem('user'));
        if (!localStorage.getItem('user') || localStorage.getItem('user') === '') {
            this.r.navigate(['/pages/login']);
        }
    }
    rangeDates: Date[];
    PRODUCTS = [];
    isLoading = false;
    selectedElement: any;
    display = false;
    search='';
    searchTypes = [
        {title: 'Most Relevent ', value: 'MostRelevent'},
        {title: 'keyword', value: 'keyword'},
        {title: 'Username', value: 'username'},
        {title: 'Location-Based', value: 'location-based'},
        {title: 'Tag', value: 'tags'},
        {title: 'Profile', value: 'profile'},
        {title: 'Hashtag', value: 'hashtag'}
    ];
    searchType = this.searchTypes[0];
    Profile=[];
    // tslint:disable-next-line:no-unused-expression
    selectedValues: string[] = []

    ngOnInit(): void {}

    getinfo(): any {
        console.log(this.search);
        this.isLoading = true;
        // @ts-ignore
        if (this.searchType.value === 'MostRelevent') {
            this.http
                .get<any>(
                    // 'http://109.205.182.203:5455/search=' + this.search
                    'http://109.205.182.203:5456/index/' +this.search
                )
                .subscribe((data) => {
                    this.PRODUCTS = data;
                    console.log(this.PRODUCTS);
                    this.PRODUCTS.sort((a,b)=>(+b.likes_count) - (+a.likes_count))
                    this.PRODUCTS = [...this.PRODUCTS];
                    this.isLoading = false;
                });
        }
        else if (this.searchType.value === 'keyword') {
            this.http
                .get<any>(
                    'http://109.205.182.203:5456/index/' +this.search
                )
                .subscribe((data) => {
                    this.PRODUCTS = data;
                    console.log(this.PRODUCTS);

                    this.PRODUCTS = [...this.PRODUCTS];
                    this.isLoading = false;
                });
        } else if(this.searchType.value === 'username') {
            this.http
                .get<any>(
                    // 'http://109.205.182.203:5455/search=from:'+this.search
                    'http://109.205.182.203:5456/profile/'+this.search
                )
                .subscribe((data) => {
                    this.PRODUCTS = data;
                    console.log(this.PRODUCTS);
                    this.PRODUCTS = [...this.PRODUCTS];
                    this.isLoading = false;
                });
            // console.log(this.search);
            // this.http
            //     .get<any>(
            //         'http://109.205.182.203:5455/profile='+this.search
            //     )
            //     .subscribe((data1) => {
            //         this.Profile = data1;
            //         console.log(this.Profile);
            //         this.Profile = [...this.Profile];
            //
            //     });
        } else if(this.searchType.value === 'location-based')  {
            this.http
                .get<any>(
                    'http://109.205.182.203:5454/search=near:'+ this.search
                )
                .subscribe((data) => {
                    this.PRODUCTS = data;
                    console.log(this.PRODUCTS);
                    this.PRODUCTS = [...this.PRODUCTS];
                    this.isLoading = false;
                });
        }else if(this.searchType.value === 'tags'){
            this.http
                .get<any>(
                    'http://109.205.182.203:5454/search=@:'+ this.search
                )
                .subscribe((data) => {
                    this.PRODUCTS = data;
                    console.log(this.PRODUCTS);
                    this.PRODUCTS = [...this.PRODUCTS];
                    this.isLoading = false;
                });

        }else if(this.searchType.value === 'hashtag'){
            this.http
                .get<any>(
                    'http://109.205.182.203:5454/search=#:'+ this.search
                )
                .subscribe((data) => {
                    this.PRODUCTS = data;
                    console.log(this.PRODUCTS);
                    this.PRODUCTS = [...this.PRODUCTS];
                    this.isLoading = false;
                });

        }

    }
    // getData() {
    //   console.log(this.search);
    //   this.http
    //       .get<any>(
    //           'http://109.205.182.203:5455/profile='+this.search
    //       )
    //       .subscribe((data1) => {
    //         this.Profile = data1;
    //         console.log(this.Profile);
    //         this.Profile = [...this.Profile];
    //
    //       });
    // }
    openDialog(ele: any) {
        this.selectedElement = ele;
        this.display = true;
    }



}



