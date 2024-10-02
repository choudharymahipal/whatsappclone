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
      name: "Harshit Mishra",
      dp: "User1.jpeg",
      time: "Just Now",
      message: "Hi, How are you?",
      readMessage: false,
      messages: [
        { id: 101, body: "Hello Harshit", time: "1:39", me: true },
        { id: 102, body: "Hi, How are you?", time: "2:13", me: false },
      ],
    },
    {
      name: "Satyarth Kumar",
      dp: "User2.jpeg",
      time: "2 min",
      message: "Sure tell me",
      readMessage: true,
      messages: [
        { id: 106, body: "Hello Satyarth", time: "8:25", me: false },
        { id: 107, body: "Hi, I need help", time: "8:26", me: true },
        { id: 108, body: "Sure tell me", time: "8:27", me: false },
      ],
    },
    {
      name: "Akash",
      dp: "User3.jpeg",
      time: "3:32 pm",
      message: "Fine",
      readMessage: false,
      messages: [
        { id: 110, body: "Hello Akash", time: "8:25", me: true },
        { id: 102, body: "Hi, How are you?", time: "2:13", me: false },
      ],
    },
    {
      name: "Pooja Gupta",
      dp: "User4.jpeg",
      time: "4:50 pm",
      message: "Alright",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello Pooja", time: "8:25", me: false },
        { id: 102, body: "Hi, How are you?", time: "2:13", me: true },
      ],
    },
    {
      name: "Pratik Verma",
      dp: "User5.jpeg",
      time: "Yesterday",
      message: "Ok",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello Pratik", time: "8:25", me: true },
        { id: 102, body: "Hi, How are you?", time: "2:13", me: false },
      ],
    },
    {
      name: "Kartik Khandelwal",
      dp: "User6.jpeg",
      time: "10 Sep",
      message: "Let's see",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello Kartik", time: "8:25", me: false },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: true },
      ],
    },
    {
      name: "Kapil Jain",
      dp: "User7.jpeg",
      time: "3 Aug",
      message: "Yeah",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello Kapil", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
      ],
    },
    {
      name: "Durgesh Banaras",
      dp: "User8.jpeg",
      time: "28 Jun",
      message: "It's ok",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello Durgesh", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
      ],
    },
    {
      name: "Priya Choudhary",
      dp: "User9.jpeg",
      time: "13 Jul",
      message: "Bye",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello Priya", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
      ],
    },
    {
      name: "Suman Rathore",
      dp: "User10.jpeg",
      time: "9 Jul",
      message: "Np",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello Suman", time: "8:25", me: true },
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
