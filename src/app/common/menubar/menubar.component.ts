import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LogstatusService } from 'src/app/services/logstatus.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
lang:string="English";
//log_message:string="Login";
  constructor(private ts:TranslateService, private ls:LogstatusService) {
    this.ts.use(this.lang);
   }

  ngOnInit(): void {
    let username=localStorage.getItem("username");
    if(username)
    this.ls.updateStatus(true);
    this.ls.message="Hello, "+username;
  }

  
langChange(){
  this.ts.use(this.lang);
}
}
