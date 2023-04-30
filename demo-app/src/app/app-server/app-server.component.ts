import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './app-server.component.html',
    styleUrls: ['./app-server.component.css']
})
export class AppServerComponent {
    serverId = 10
    serverStatus = 'offline'

    getServerStatus() {
        return this.serverStatus
    }
}