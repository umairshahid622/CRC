import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/countryservice';
import { NodeService } from '../../service/nodeservice';
import { SelectItem } from 'primeng/api';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],

})
export class InputComponent implements OnInit{
    search = '';
    isLoading = false;
    loading: boolean;
    PRODUCTS: any;
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
                'http://109.205.182.203:5400/external/'+ this.search
            )
            .subscribe((data) => {
                this.PRODUCTS = data;
                console.log(this.PRODUCTS);
                this.PRODUCTS = [...this.PRODUCTS];
                this.isLoading = false;
            });
    }
}
