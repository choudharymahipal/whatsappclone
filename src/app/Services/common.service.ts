import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  isChatWindow: boolean = false; //Default opened window
  isStatusWindow: boolean = true;
  isChannelWindow: boolean = false;
  isCommunitiesWindow: boolean = false;
  isMetaAI: boolean = false;
  isSettingsWindow: boolean = false;
  isProfileWindow: boolean = false;

  constructor() {}

  setWindowState(currentWindow: string) {
    this.isChatWindow = false;
    this.isStatusWindow = false;
    this.isChannelWindow = false;
    this.isCommunitiesWindow = false;
    this.isMetaAI = false;
    this.isSettingsWindow = false;
    this.isProfileWindow = false;

    if (currentWindow === "Chat") {
      this.isChatWindow = true;
    } else if (currentWindow === "Status") {
      this.isStatusWindow = true;
    } else if (currentWindow === "Call") {
      this.isChannelWindow = true;
    } else if (currentWindow === "Community") {
      this.isCommunitiesWindow = true;
    } else if (currentWindow === "Meta") {
      this.isMetaAI = true;
    } else if (currentWindow === "Setting") {
      this.isSettingsWindow = true;
    } else if (currentWindow === "Profile") {
      this.isProfileWindow = true;
    }
  }
}
