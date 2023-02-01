import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Message, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
@Component({
    selector: 'app-querytable',
    templateUrl: './querytable.component.html',
    styleUrls: ['./querytable.component.scss'],
    providers: [MessageService, ConfirmationService],
})
export class QuerytableComponent implements OnInit {
    search = [];

    constructor(
        private as: AppService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.search = this.as.queryTable;
    }

    ngOnInit(): void {
        setTimeout(() => {
            // this.messageService.add({
            //     severity: 'success',
            //     summary: 'Success',
            //     detail: 'Welcome',
            // });
        }, 500);
    }

    get isDisable(): boolean {
        return this.search.every((s) => s.status === 'Completed');
    }
    msgs: Message[] = [];
    deletequery(element: any) {
        this.deleteQuery(element);
    }
    deleteQuery(ele:any) {
        // console.warn(this.search.indexOf(ele));
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.search.splice(this.search.indexOf(ele), 1);
                this.msgs = [
                    {
                        severity: 'info',
                        summary: 'Confirmed',
                        detail: 'Querry deleted',
                    },
                ];
            },
            reject: () => {
                this.msgs = [
                    {
                        severity: 'info',
                        summary: 'Rejected',
                        detail: 'You have rejected',
                    },
                ];
            },
        });
    }
}
