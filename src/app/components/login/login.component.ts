import { MessageService } from 'primeng/api';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [MessageService],
    styles: [
        `
            :host ::ng-deep .p-password input {
                width: 100%;
                padding: 1rem;
            }

            :host ::ng-deep .pi-eye {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
            :host ::ng-deep {
                .p-button-label {
                    display: contents;
                }
            }
            .loader {
                border: 4px solid seashell;
                border-radius: 50%;
                border-top: 4px solid slateblue;
                border-bottom: 4px solid slateblue;
                width: 26px;
                height: 26px;
                -webkit-animation: spin 2s linear infinite;
                animation: spin 2s linear infinite;
            }

            @-webkit-keyframes spin {
                0% {
                    -webkit-transform: rotate(0deg);
                }
                100% {
                    -webkit-transform: rotate(360deg);
                }
            }

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
            .loginButton {
                margin: 0px;
                display: flex;
                width: 100%;
                justify-content: center;
                font-weight: bold;
                p {
                    margin: 0px;
                    font-weight: bold;
                }
            }
        `,
    ],
})
export class LoginComponent implements OnInit, OnDestroy {
    valCheck: string[] = ['remember'];
    loading = false;
    password: string;
    username: string;
    config: AppConfig;
    subscription: Subscription;
    response: any;
    error: string;
    httpErrorResponse: HttpErrorResponse;
    constructor(
        public configService: ConfigService,
        private r: Router,
        private http: HttpClient,
        private messageService: MessageService,
        private as: AppService // private httpErrorResponse: HttpErrorResponse
    ) {}

    ngOnInit(): void {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(
            (config) => {
                this.config = config;
            }
        );
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    onReject() {
        this.messageService.clear('c');
    }
    login() {
        this.loading = true;
        this.http
            .post(`http://109.205.182.203:5419/api/login/`, {
                username: this.username,
                password: this.password,
            })
            .pipe()
            .subscribe(
                (response) => {
                    this.response = response;
                    console.log(response);
                    localStorage.setItem('user', 'available');

                    this.as.queryTable = [
                        {
                            text: 'EngineerMuhammadALiMirza',
                            status: 'Completed',
                            time: '15:16',
                            source: 'Youtube',
                        },
                        {
                            text: 'JavaScriptDeveloper',
                            status: 'Completed',
                            time: '15:16',
                            source: 'LinkedIn',
                        },
                        {
                            text: 'ImranKhanPti',
                            status: 'Completed',
                            time: '15:16',
                            source: 'Twitter',
                        },
                    ];

                    if (this.as.queryTable.length) {
                        this.r.navigate(['/pages/query']);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Login Sucessfully',
                            detail: this.username,
                        });
                    } else {
                        this.r.navigate(['/pages/search']);
                    }
                },
                (err) => {
                    this.loading = false;
                    console.log(err);
                    switch (err.status) {
                        case 500:
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Info',
                                detail: 'Connection Refused',
                            });
                            break;
                        case 400:
                            if (err.error.username && err.error.password) {
                                this.error =
                                    'username and password is required';
                            } else if (err.error.username) {
                                this.error = 'username is required';
                            } else if (err.error.password) {
                                this.error = 'password is required';
                            } else {
                                this.error = err.error.non_field_errors;
                            }
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Info',
                                detail: this.error,
                            });
                            break;
                        default:
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Info',
                                detail: err.message,
                            });
                            break;

                    }
                }
            );
    }
}
