import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "testServer";
  userName = "";
  allowReset = false;
  serverCreated = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer (){
    this.serverCreationStatus = "Server was created" + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServer(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
