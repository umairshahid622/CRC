import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/countryservice';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    templateUrl: './floatlabel.component.html',
    styleUrls: ['./floatlabel.scss']
})
export class FloatLabelComponent implements OnInit {

    customers = [];
    cols: any[];
    exportColumns: any[];
    search = '';
    isLoading = false;
    loading: boolean;
    constructor(private http:HttpClient, private r: Router) {
        console.log('ssss');
        if (!localStorage.getItem('user') || localStorage.getItem('user') === '') {
            this.r.navigate(['/pages/login']);
        }
    }

    ngOnInit(): void {
    }

    getData() {
        this.isLoading=true
        console.log(this.search);
        this.http
            .get<any>(
                'http://109.205.182.203:8888/external/'+ this.search
            )
            .subscribe((data) => {
                this.customers = data;
                console.log(this.customers);
                this.customers = [...this.customers];
                this.isLoading = false;
            });
    }

}
