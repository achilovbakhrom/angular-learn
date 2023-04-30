import { Component } from "@angular/core";

@Component({
    selector: 'app-error-message',
    templateUrl: './app-error-message.component.html',
    styleUrls: ['./app-error-message.component.css']
})
export class AppErrorMessageComponent {
    message = 'Error Message'
}