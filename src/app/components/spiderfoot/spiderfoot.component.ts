import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-spiderfoot',
  templateUrl: './spiderfoot.component.html',
  styleUrls: ['./spiderfoot.component.scss']
})
export class SpiderfootComponent implements OnInit {

    customers = [];
    cols: any[];
    Result =[];
    exportColumns: any[];
    search = '';
    display = false;
    selectedElement: any;
    isLoading = false;
    loading= false;
    constructor(private http:HttpClient, private r: Router) {
        console.log('ssss');
        if (!localStorage.getItem('user') || localStorage.getItem('user') === '') {
            this.r.navigate(['/pages/login']);
        }
    }

    ngOnInit(): void {

        setInterval(() => {
            this.http
                .get<any>(
                    'http://109.205.182.203:8000/TblScanInstance/'
                )
                .subscribe((data) => {
                    this.customers = data;
                    this.customers = [...this.customers];

                });
        }, 2000);
        setInterval(() => {
            this.http
                .get<any>(
                    'http://109.205.182.203:8000/TblScanResults/'
                )
                .subscribe((data1) => {
                    this.Result = data1;
                    const array = [];
                    this.Result.forEach((r) => {
                        if (array.find(a => a.type === r.type)) {
                            const element = array.find(a => a.type === r.type);
                            if (!element.extra_data) {
                                element.extra_data = [r];
                            } else {
                                element.extra_data.push(r);
                            }
                        } else {
                            array.push(r);
                        }
                    });
                    this.Result = [...array];

                });
        }, 20000);
    }

    Runscan(){
        console.log(this.search);
        this.http
            .get<any>(
                'http://109.205.182.203:8000/external/'+this.search
            )
            .subscribe((data) => {
                this.customers = data;
                console.log(this.customers);
                this.customers = [...this.customers];

            });
    }


    openDialog(ele: any) {
        this.selectedElement = ele;
        this.display = true;
    }

    // @ts-ignore
    getColor(status: any) {
        (2)
        switch (status) {
            case 'Running':
                return 'Green';
            case 'FINISHED':
                return 'Red';
        }
    }
}


