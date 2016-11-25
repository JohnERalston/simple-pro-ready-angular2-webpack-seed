import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {

    getTestString(): string {
        return "Test me please";
    }

}