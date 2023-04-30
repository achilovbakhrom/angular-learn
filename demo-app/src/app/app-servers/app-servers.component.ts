import { Component } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './app-servers.component.html',
    styleUrls: ['app-servers.component.css']
})
export class AppServersComponent {
    allowAddServer = false
    serverCreationStatus = 'No Server was created!'
    serverName = ''
    constructor() {
        setTimeout(() => {
            this.allowAddServer = true
        }, 3000)
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
    }
}