import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: ` Hello Universe`,
    styles: `
        :host {
            color: #7842a3;
        }
    `,
})
export class App {}