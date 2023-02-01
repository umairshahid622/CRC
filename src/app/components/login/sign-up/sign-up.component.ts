import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AppConfig} from "../../../api/appconfig";
import {Subscription} from "rxjs";
import {ConfigService} from "../../../service/app.config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    valCheck: string[] = ['remember'];

    password: string;

    config: AppConfig;

    subscription: Subscription;

    constructor(public configService: ConfigService, private r: Router){ }

    ngOnInit(): void {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
        });
    }

    ngOnDestroy(): void {
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }

    login() {
        localStorage.setItem('user', 'available');
        this.r.navigate(['/']);
    }
}
