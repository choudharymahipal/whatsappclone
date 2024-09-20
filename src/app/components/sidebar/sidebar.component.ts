import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  onSearch: string = "";
  conversations = [
    {
      name: "User 1",
      time: "Just Now",
      message: "Let's go",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello User 1", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 2",
      time: "2 min",
      message: "Hmm",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 2", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 3",
      time: "3:32 pm",
      message: "Fine",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello User 3", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 4",
      time: "4:50 pm",
      message: "Alright",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 4", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 5",
      time: "Yesterday",
      message: "Ok",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 5", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 6",
      time: "10 Sep",
      message: "Let's see",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello User 6", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 7",
      time: "3 Aug",
      message: "Yeah",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 7", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 8",
      time: "28 Jun",
      message: "It's ok",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello User 8", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 9",
      time: "13 Jul",
      message: "Bye",
      readMessage: true,
      messages: [
        { id: 1, body: "Hello User 9", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
    {
      name: "User 10",
      time: "9 Jul",
      message: "Np",
      readMessage: false,
      messages: [
        { id: 1, body: "Hello User 10", time: "8:25", me: true },
        { id: 1, body: "Hi,Where are u now?", time: "8:26", me: false },
        { id: 1, body: "In the university", time: "8:27", me: true },
        { id: 1, body: "Ok, wait I'll come", time: "8:28", me: false },
      ],
    },
  ];

  filteredConversation() {
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
  }
  constructor() {}

  ngOnInit(): void {}
}
