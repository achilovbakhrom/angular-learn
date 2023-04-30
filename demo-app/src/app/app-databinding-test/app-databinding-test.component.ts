import { Component } from "@angular/core";


@Component({
    selector: 'app-databinding-test',
    templateUrl: './app-databinding-test.component.html',
    styleUrls: ['./app-databinding-test.component.css']
})
export class AppDatabindingTestComponent {
    username = ''

    onResetButtonClick() {
        this.username = ''
    }

    isUsernameEmpty() {
        return !this.username
    }
}