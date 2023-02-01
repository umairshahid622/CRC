import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-topurls',
  templateUrl: './topurls.component.html',
  styleUrls: ['./topurls.component.scss']
})
export class TopurlsComponent implements OnInit {

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

    // tslint:disable-next-line:no-unused-expression
    selectedValues: string[] = []

    ngOnInit(): void {}





}
