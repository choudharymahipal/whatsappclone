import { Component } from "@angular/core";
import { CommonService } from "./Services/common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "whatsapp-clone";
  conversation: any;

  constructor(public commonSvc:CommonService){}

  onConversationSelected(conversation: any) {
    this.conversation = conversation;
  }

  onClickIconSelect(selectedIconName: string) {
    this.commonSvc.setWindowState(selectedIconName);
  }
}
