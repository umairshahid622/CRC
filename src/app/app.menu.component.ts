import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];
    searchQuery:any;
    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.searchQuery = localStorage.getItem('searchQuery')
        console.warn(`searchQuery: ${this.searchQuery}`);
        
        this.model = [
            {
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {
                label: 'Home',
                items:[
                    {label: 'Analytics',icon: 'pi pi-fw pi-chart-bar', routerLink: ['/Dashboard']}
                ]
            },


            // {
            //     label: 'Tools',
            //     items: [
            //         {
            //             label: 'Social',
            //             icon: 'pi pi-fw pi-desktop',
            //             items: [
            //                 {label: 'Cards',
            //                     icon: 'pi pi-fw pi-twitter',
            //                     routerLink: ['/Tools/twint']},
            //                 // {label: 'Cards',
            //                 //     icon: 'pi pi-fw pi-twitter',
            //                 //     routerLink: ['/Tools/Cards']},
            //                 {label: 'LinkedIn',
            //                     icon: 'pi pi-fw pi-linkedin',
            //                     routerLink: ['/Tools/LinkedIn']},
            //                 {label: 'Social Analyzer',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     routerLink: ['/Tools/Social-Analyzer']},
            //                 // {label: 'cards',
            //                 //     icon: 'pi pi-fw pi-twitter',
            //                 //     routerLink: ['/Tools/twint']},
            //             ]
            //         },
            //         {
            //             label: 'Network',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //
            //                 {label: 'Maigret',
            //                     icon: 'pi pi-fw pi-check-square',
            //                     routerLink: ['/Tools/Migret']},
            //
            //                 {label: 'DarkScout',
            //                     icon: 'pi pi-fw pi-table',
            //                     routerLink: ['/Tools/Spider']},
            //             ]
            //         },
            //     ]
            // },
            // {
            //     items: [
            //
            //         {
            //             label: 'Summary',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //
            //                 {label: 'TopUsers',
            //                     icon: 'pi pi-fw pi-check-square',
            //                     routerLink: ['']},
            //                 {label: 'TopUrls',
            //                     icon: 'pi pi-fw pi-link',
            //                     routerLink: ['/videos/topurls']},
            //                 {label: 'TopHastag',
            //                     icon: 'pi pi-fw pi-table',
            //                     routerLink: ['']},
            //                 {label: 'TopVideos',
            //                     icon: 'pi pi-fw pi-video',
            //                     routerLink: ['']},
            //             ]
            //         },
            //
            //     ]
            // },
            {
                label: 'Existing Projects',
                items: [
                    {
                        label: 'Project1',
                        icon: 'pi pi-fw pi-desktop',
                        items: [
                            {label: 'Cards', icon: 'pi pi-fw pi-twitter', routerLink: ['/Project1/Cards']},
                            {label: 'TopUsers', icon: 'pi pi-fw pi-check-square', routerLink: ['/Project1/TopUser']},
                            {label: 'TopTweets', icon: 'pi pi-fw pi-link', routerLink: ['/Project1/TopTweets']},
                            // {label: 'TopHastag', icon: 'pi pi-fw pi-table', routerLink: ['/Project1/Hashtag']},
                            // {label: 'TopVideos', icon: 'pi pi-fw pi-video', routerLink: ['Project1/TopVideos']},
                        ]
                    },
                    {
                        label: 'Project2',
                        icon: 'pi pi-fw pi-desktop',
                        items: [
                            {label: 'Cards', icon: 'pi pi-fw pi-twitter', routerLink: ['/Project2/Cards']},
                            {label: 'TopUsers', icon: 'pi pi-fw pi-check-square', routerLink: ['/Project2/TopUser']},
                            {label: 'TopTweets', icon: 'pi pi-fw pi-link', routerLink: ['/Project2/TopTweets']},
                            // {label: 'TopHastag', icon: 'pi pi-fw pi-table', routerLink: ['/Project2/Hashtag']},
                            // {label: 'TopVideos', icon: 'pi pi-fw pi-video', routerLink: ['Project2/TopVideos']},
                        ]
                    },
                ]
            },
            {
                items:[
                    {label: 'Add New Project',icon: 'pi pi-fw pi-plus-circle', routerLink: ['/pages/search']}
                ]
            },
            // {
            //     items: [
            //
            //         {
            //             label: 'Project', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Project1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {label: 'Cards',
            //                             icon: 'pi pi-fw pi-twitter',
            //                             routerLink: ['/Tools/twint']},
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //
            //             ]
            //         }
            //     ]
            // },
            // {
            //     items: [
            //         {
            //             label: 'Project',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //
            //                 {label: 'Project1',
            //                     icon: 'pi pi-fw pi-check-square',
            //                     routerLink: ['/']},
            //
            //                 {label: 'Cards',
            //                     icon: 'pi pi-fw pi-table',
            //                     routerLink: ['/Tools/twint\'']},
            //             ]
            //         },
            //     ]
            // },
            {
                label: 'reddit',
                items:[
                    {label: 'Cards',icon: 'pi pi-fw pi-twitter', routerLink: ['/reddit']}
                ]
            },
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
