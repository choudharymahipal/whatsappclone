import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CommonService } from "src/app/Services/common.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  onSearch: string = "";
  isFilterAll: boolean = true;
  isFilterUnread: boolean = false;
  isFilterGroups: boolean = false;

  conversations = [
    {
      name: "User 1",
      dp: "User1.jpeg",
      time: "Just Now",
      message: "Hi, How are you?",
      readMessage: false,
      messages: [
        { id: 101, body: "Hello User 1", time: "1:39", me: true },
        { id: 102, body: "Hi, How are you?", time: "2:13", me: false },
      ],
    },
    {
      name: "User 2",
      dp: "User2.jpeg",
      time: "2 min",
      message: "Sure tell me",
      readMessage: true,
      messages: [
        { id: 106, body: "Hello User 2", time: "8:25", me: false },
        { id: 107, body: "Hi, I need help", time: "8:26", me: true },
        { id: 108, body: "Sure tell me", time: "8:27", me: false },
      ],
    },
    {
      name: "User 3",
      dp: "User3.jpeg",
      time: "3:32 pm",
      message: "Fine",
      readMessage: false,
      messages: [
        { id: 110, body: "Hello User 3", time: "8:25", me: true },
        { id: 102, body: "Hi, How are you?", time: "2:13", me: false },
      ],
    },
    {
      name: "User 4",
      dp: "User4.jpeg",
      time: "4:50 pm",
      message: "Alright",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 4", time: "8:25", me: false },
        { id: 102, body: "Hi, How are you?", time: "2:13", me: true },
      ],
    },
    {
      name: "User 5",
      dp: "User5.jpeg",
      time: "Yesterday",
      message: "Ok",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 5", time: "8:25", me: true },
        { id: 102, body: "Hi, How are you?", time: "2:13", me: false },
      ],
    },
    {
      name: "User 6",
      dp: "User6.jpeg",
      time: "10 Sep",
      message: "Let's see",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello", time: "8:25", me: false },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: true },
      ],
    },
    {
      name: "User 7",
      dp: "User7.jpeg",
      time: "3 Aug",
      message: "Yeah",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 7", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
      ],
    },
    {
      name: "User 8",
      dp: "User8.jpeg",
      time: "28 Jun",
      message: "It's ok",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello User 8", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
      ],
    },
    {
      name: "User 9",
      dp: "User9.jpeg",
      time: "13 Jul",
      message: "Bye",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 9", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
      ],
    },
    {
      name: "User 10",
      dp: "User10.jpeg",
      time: "9 Jul",
      message: "Np",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello User 10", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
      ],
    },
  ];

  filteredConversation(filterBy: string) {
    if (filterBy === "All") {
      return this.conversations.filter((conversation) => {
        return (
          conversation.name
            .toLocaleLowerCase()
            .includes(this.onSearch.toLowerCase()) ||
          conversation.message
            .toLocaleLowerCase()
            .includes(this.onSearch.toLowerCase())
        );
      });
    } else {
      //Filter by Unread or Groups
      return this.conversations.filter((conversation) => {
        return conversation.readMessage == false;
      });
    }
  }
  constructor(public commonSvc:CommonService) {}

  ngOnInit(): void {}

  filterMsg(filterBy: string) {
    this.isFilterAll = false;
    this.isFilterUnread = false;
    this.isFilterGroups = false;
    if (filterBy === "All") {
      this.isFilterAll = true;
    } else if (filterBy === "Unread") {
      this.isFilterUnread = true;
    } else if (filterBy === "Groups") {
      this.isFilterGroups = true;
    }

    this.filteredConversation(filterBy);
  }
}
