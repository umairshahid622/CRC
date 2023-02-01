import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    HostListener,
    AfterViewInit,
} from '@angular/core';
const dropDownAnimation = trigger('fade', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('250ms', style({ opacity: 0 })),
    ]),
]);
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-linkden',
  templateUrl: './linkden.component.html',
  styleUrls: ['./linkden.component.scss']
})
export class LinkdenComponent implements OnInit {
    constructor() {}
    ngAfterViewInit(): void {}
    ngOnInit(): void {}
    @ViewChild('clickoutEvent') clickoutEvent: ElementRef | undefined;
    @HostListener('document:click', ['$event'])
    clickoutEv(event: MouseEvent) {
        if (this.clickoutEvent?.nativeElement.contains(event.target)) {
            console.warn('Click Inside');
            this.dropDownOpen = true;
        } else {
            console.warn('clicked Outside');
            this.dropDownOpen = false;
        }
    }
    tabs = ['SOMETHING', 'USERS', 'TRENDS'];
    selectedTab: string = 'SOMETHING';
    tabClick(item: any) {
        this.selectedTab = item;
    }
    selectedOption: string = 'Select';
    dropDoownOptions = [
        { name: 'Facebook', code: 'NY' },
        { name: 'Twitter', code: 'RM' },
        { name: 'Youtube', code: 'LDN' },
    ];
    dropDownOpen = false;
    toogleDropDown() {
        this.dropDownOpen = !this.dropDownOpen;
    }
    selectVal(val: any) {
        this.selectedOption = val;
        this.dropDownOpen = false;
    }
}
