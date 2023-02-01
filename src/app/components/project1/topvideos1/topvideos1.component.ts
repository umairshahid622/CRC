import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-topvideos1',
  templateUrl: './topvideos1.component.html',
  styleUrls: ['./topvideos1.component.scss']
})
export class Topvideos1Component implements OnInit {
    constructor(private http:HttpClient,private ar: ActivatedRoute,
                private r: Router) {
        console.log(localStorage.getItem('user'));
        if (!localStorage.getItem('user') || localStorage.getItem('user') === '') {
            this.r.navigate(['/pages/login']);
        }
    }
    PRODUCTS = [];
    isLoading = false;
    Profile=[];
    // tslint:disable-next-line:no-unused-expression
    selectedValues: string[] = []

  ngOnInit(): void {
  }

}
