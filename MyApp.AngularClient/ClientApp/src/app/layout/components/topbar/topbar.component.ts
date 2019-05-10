import { Component, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';


@Component({
    selector: 'layout-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
/** topbar component*/
export class TopbarComponent {
    @Input() items: any[];

    /** topbar ctor */
    constructor() {

    }
}
