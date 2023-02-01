import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-searchpage',
    templateUrl: './searchpage.component.html',
    styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent implements OnInit {
    searchKey = '';
    value3: any;
    searchTypes = [
        { title: 'Twitter', value: 'keyword' },
        { title: 'Linkden', value: 'username' },
        { title: 'FaceBook', value: 'location-based' },
        { title: 'Reddit', value: 'location-based' },
    ];
    dropDownValue = this.searchTypes[0];
    constructor(private r: Router) {
        console.log(localStorage.getItem('user'));
        if (
            !localStorage.getItem('user') ||
            localStorage.getItem('user') === ''
        ) {
            this.r.navigate(['/pages/login']);
        }
    }

    ngOnInit(): void {}

    selectedCategory = 'Mentions';
    borderRadius = 18;
    category = ['Mentions', 'Trends', 'Users'];
    selectCategory(item: any) {
        console.warn(item);
        this.selectedCategory = item;
    }

    getDropDownValue() {
        console.warn(this.dropDownValue.title);
    }
    getinfo(): void {
        localStorage.setItem('searchQuery', this.searchKey);
        localStorage.setItem('dropDownValue', this.dropDownValue.title);
        if (this.searchKey !== '' && this.dropDownValue !== null) {
            localStorage.setItem('keyword', this.searchKey);
            if (this.dropDownValue.title === 'Reddit') {
                this.r.navigate([`/reddit`]);
            } else if (
                this.selectedCategory === 'Mentions' &&
                this.dropDownValue.title === 'Twitter'
            ) {
                this.r.navigate([`/pages/query`]);
            }
        }
    }
}
