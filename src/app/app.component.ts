import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "whatsapp-clone";
  conversation: any;
  isIconChat: boolean = true;
  isIconStatus: boolean = false;
  isIconCall: boolean = false;
  isIconCommunity: boolean = false;
  isIconMeta: boolean = false;
  isIconSetting: boolean = false;
  isIconProfile: boolean = false;

  onConversationSelected(conversation: any) {
    this.conversation = conversation;
  }

  onClickIconSelect(selectedIconName: string) {
    this.isIconChat = false;
    this.isIconStatus = false;
    this.isIconCall = false;
    this.isIconCommunity = false;
    this.isIconMeta = false;
    this.isIconSetting = false;
    this.isIconProfile = false;

    if (selectedIconName === "Chat") {
      this.isIconChat = true;
    } else if (selectedIconName === "Status") {
      this.isIconStatus = true;
    } else if (selectedIconName === "Call") {
      this.isIconCall = true;
    } else if (selectedIconName === "Community") {
      this.isIconCommunity = true;
    } else if (selectedIconName === "Meta") {
      this.isIconMeta = true;
    } else if (selectedIconName === "Setting") {
      this.isIconSetting = true;
    } else if (selectedIconName === "Profile") {
      this.isIconProfile = true;
    }
  }
}
